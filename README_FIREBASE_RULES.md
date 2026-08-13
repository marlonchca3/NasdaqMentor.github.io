Pasos para aplicar reglas y CORS para Firebase (Nasdaq Mentor)

1) Resumen
- He añadido archivos al repositorio:
  - `firebase.firestore.rules` — reglas recomendadas para Firestore
  - `firebase.storage.rules` — reglas recomendadas para Storage
  - `cors.json` — configuración CORS para `http://localhost:5173`
  - `scripts/apply_cors.sh` — helper para aplicar CORS con `gsutil`

2) Requisitos previos
- Necesitas permisos Owner/Editor/Storage Admin en el proyecto `nasdaq-fdfec`.
- Tener `gcloud` y `gsutil` instalados localmente si quieres aplicar CORS por terminal.
- Si no tienes CLI, puedes aplicar reglas y CORS desde Google Cloud Console / Firebase Console.

3) Aplicar reglas en Firebase Console
- Firestore:
  - Abrir Firebase Console → Firestore → Rules → reemplazar contenido con `firebase.firestore.rules` y publicar.
- Storage:
  - Firebase Console → Storage → Rules → reemplazar contenido con `firebase.storage.rules` y publicar.

4) Aplicar CORS con `gsutil` (CLI)
- Autenticar y seleccionar proyecto:

```bash
gcloud auth login
gcloud config set project nasdaq-fdfec
```

- Aplicar CORS al bucket:

```bash
gsutil cors set cors.json gs://nasdaq-fdfec.appspot.com
```

5) Alternativa: editar CORS desde Google Cloud Console
- Ve a Cloud Console → Storage → Browser → haz click en el bucket `nasdaq-fdfec.appspot.com` → pestaña "Configuración" → CORS → Editar y pega el contenido de `cors.json`.

6) Verificación
- Reinicia la app en `http://localhost:5173`.
- En la app, inicia sesión con Google y prueba subir o guardar un gráfico.
- Revisa DevTools Console por mensajes:
  - `savePnlChart: chart doc added` o `onChartFileSelected: chart doc added`.
- Verifica en Firebase Console → Firestore → Colección `users/{uid}/charts` que exista un documento con `url` y `createdAt`.

7) Notas de seguridad y siguientes pasos
- Las reglas aquí propuestas permiten que cada usuario acceda sólo a sus recursos. Son apropiadas para desarrollo y producción.
- Si temporalmente necesitas reglas más permisivas para diagnóstico, documenta y revierte los cambios después de probar.
- Si al crear el bucket en la consola sigues viendo "Ocurrió un error desconocido", intenta:
  - Recargar la página y volver a intentar.
  - Crear/editar el bucket desde Google Cloud Console (Storage → Browser).
  - Verificar facturación y permisos del proyecto.

Si quieres, aplico los archivos de reglas al repositorio (ya los creé) y puedo guiarte paso a paso para ejecutar los comandos en tu máquina o para pegarlos en la consola web. ¿Cómo prefieres proceder?