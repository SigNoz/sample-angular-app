import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  OpenTelemetryInterceptorModule,
  OtelColExporterModule,
  CompositePropagatorModule,
} from '@jufab/opentelemetry-angular-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OpenTelemetryInterceptorModule.forRoot({
      commonConfig: {
        console: true, // Display trace on console
        production: true, // Send Trace with BatchSpanProcessor (true) or SimpleSpanProcessor (false)
        serviceName: 'Angular Sample App', // Service name send in trace
        // logBody: true, // true add body in a log, nothing otherwise
        probabilitySampler: '1', // 75% sampling
        // logLevel: DiagLogLevel.ALL, //ALL Log, DiagLogLevel is an Enum from @opentelemetry/api
      },
      otelcolConfig: {
        url: 'https://ingest.in.signoz.cloud:443/v1/traces', // URL of opentelemetry collector
        headers: {
          // SigNoz access token
          'signoz-access-token': '72282c07-60ad-45ff-9131-3b8819f9cdc3',
        },
      },
    }),
    //Insert OtelCol exporter module
    OtelColExporterModule,
    //Insert propagator module
    CompositePropagatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
