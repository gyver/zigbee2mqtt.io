"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6776],{664566:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-140360db","path":"/devices/SRTS-A01.html","title":"Xiaomi SRTS-A01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi SRTS-A01 control via MQTT","description":"Integrate your Xiaomi SRTS-A01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Setup (binary)","slug":"setup-binary","link":"#setup-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Calibrated (binary)","slug":"calibrated-binary","link":"#calibrated-binary","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Valve detection (switch)","slug":"valve-detection-switch","link":"#valve-detection-switch","children":[]},{"level":3,"title":"Valve alarm (binary)","slug":"valve-alarm-binary","link":"#valve-alarm-binary","children":[]},{"level":3,"title":"Away preset temperature (numeric)","slug":"away-preset-temperature-numeric","link":"#away-preset-temperature-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Schedule settings (text)","slug":"schedule-settings-text","link":"#schedule-settings-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1698481465000},"filePathRelative":"devices/SRTS-A01.md"}')},169601:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(166252);const a=(0,i._)("h1",{id:"xiaomi-srts-a01",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#xiaomi-srts-a01","aria-hidden":"true"},"#"),(0,i.Uk)(" Xiaomi SRTS-A01")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SRTS-A01")],-1),r=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Aqara Smart Radiator Thermostat E1")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"setup, climate (occupied_heating_setpoint, local_temperature, system_mode, preset), sensor, calibrated, lock (state), switch (state), window_open, valve_alarm, away_preset_temperature, voltage, battery, power_outage_count, device_temperature, schedule_settings, linkquality")],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SRTS-A01.jpg",alt:"Xiaomi SRTS-A01"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("p",null,"Press and hold the center ring for 10 seconds until the blue network indicator flashes.",-1),m=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),b=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),g=(0,i.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="setup-binary" tabindex="-1"><a class="header-anchor" href="#setup-binary" aria-hidden="true">#</a> Setup (binary)</h3><p>Indicates if the device is in setup mode (E11). Value can be found in the published state on the <code>setup</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> setup is ON, if <code>false</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>preset</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured by the internal or external sensor (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>away</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>internal</code>, <code>external</code>.</p><h3 id="calibrated-binary" tabindex="-1"><a class="header-anchor" href="#calibrated-binary" aria-hidden="true">#</a> Calibrated (binary)</h3><p>Is the valve calibrated. Value can be found in the published state on the <code>calibrated</code> property. It&#39;s not possible to read (<code>/get</code>) this value. If value equals <code>true</code> calibrated is ON, if <code>false</code> OFF.</p><p>To start a new calibration, publish a message to <code>zigbee2mqtt/FRIENDLY_NAME/set/calibrate</code> with no payload.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch" aria-hidden="true">#</a> Window detection (switch)</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_detection&quot;: &quot;&quot;}</code>.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary" aria-hidden="true">#</a> Window open (binary)</h3><p>Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="valve-detection-switch" tabindex="-1"><a class="header-anchor" href="#valve-detection-switch" aria-hidden="true">#</a> Valve detection (switch)</h3><p>The current state of this switch is in the published state under the <code>valve_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;valve_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;valve_detection&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_detection&quot;: &quot;&quot;}</code>.</p><h3 id="valve-alarm-binary" tabindex="-1"><a class="header-anchor" href="#valve-alarm-binary" aria-hidden="true">#</a> Valve alarm (binary)</h3><p>Notifies of a temperature control abnormality if valve detection is enabled (e.g., thermostat not installed correctly, valve failure or incorrect calibration, incorrect link to external temperature sensor). Value can be found in the published state on the <code>valve_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> valve alarm is ON, if <code>false</code> OFF.</p><h3 id="away-preset-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-temperature-numeric" aria-hidden="true">#</a> Away preset temperature (numeric)</h3><p>Away preset temperature. Value can be found in the published state on the <code>away_preset_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;away_preset_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>schedule</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: &quot;ON&quot;}</code>, <code>{&quot;schedule&quot;: &quot;OFF&quot;}</code> or <code>{&quot;schedule&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule&quot;: &quot;&quot;}</code>.</p><h3 id="schedule-settings-text" tabindex="-1"><a class="header-anchor" href="#schedule-settings-text" aria-hidden="true">#</a> Schedule settings (text)</h3><p>Smart schedule configuration (default: mon,tue,wed,thu,fri|8:00,24.0|18:00,17.0|23:00,22.0|8:00,22.0). Value can be found in the published state on the <code>schedule_settings</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_settings&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_settings&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',38),w={},v=(0,o(983744).Z)(w,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Xiaomi"},{default:(0,i.w5)((()=>[(0,i.Uk)("Xiaomi")])),_:1})])]),s,l,n])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i.kq)(" Notes END: Do not edit below this line "),m,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),b,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);