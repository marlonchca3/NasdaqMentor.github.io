const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

const NINJA_SYNC_KEY = defineSecret("NINJA_SYNC_KEY");

exports.ninjaExecution = onRequest(
  {
    secrets: [NINJA_SYNC_KEY],
    cors: false,
  },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({
          ok: false,
          error: "Method not allowed",
        });
      }

      const receivedKey = req.get("X-NasdaqMentor-Key");

      if (!receivedKey || receivedKey !== NINJA_SYNC_KEY.value()) {
        return res.status(401).json({
          ok: false,
          error: "Unauthorized",
        });
      }

      const {
        userId,
        account,
        instrument,
        action,
        quantity,
        price,
        commission,
        executionId,
        orderId,
        orderName,
        position,
        marketPosition,
        time,
      } = req.body;

      if (!userId) {
        return res.status(400).json({
          ok: false,
          error: "Missing userId",
        });
      }

      if (!executionId) {
        return res.status(400).json({
          ok: false,
          error: "Missing executionId",
        });
      }

      const cleanExecutionId = String(executionId).replace(/\//g, "_");

      const ref = db
        .collection("users")
        .doc(userId)
        .collection("ninjaExecutions")
        .doc(cleanExecutionId);

      await ref.set(
        {
          source: "ninjatrader",

          account: account || "",

          instrument: instrument || "",

          action: action || "",

          quantity: Number(quantity || 0),

          price: Number(price || 0),

          commission: Number(commission || 0),

          executionId,

          orderId: orderId || "",

          orderName: orderName || "",

          position: Number(position || 0),

          marketPosition: marketPosition || "",

          executionTime: time
            ? admin.firestore.Timestamp.fromDate(new Date(time))
            : admin.firestore.FieldValue.serverTimestamp(),

          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        {
          merge: true,
        }
      );

      return res.status(200).json({
        ok: true,
        executionId,
      });
    } catch (error) {
      console.error("ninjaExecution error:", error);

      return res.status(500).json({
        ok: false,
        error: error.message,
      });
    }
  }
);
