## [Demo Video](https://youtu.be/VHm_RqsE5rc)

How to run the FE

1. Build `yarn run build`
2. Start the static server `node ./serve-static.js`
3. App will run at `localhost:4200`.

How to configure the exporter ?
Allow cors in the OTel SigNoz config.yml.

```diff
receivers:
  otlp:
    protocols:
      http:
+        cors:
+          allowed_origins:
+            - http://localhost:4200
```
