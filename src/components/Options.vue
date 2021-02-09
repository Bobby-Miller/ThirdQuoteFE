
<template>
    <div id="grid">
    <div>
      <h2>Burner System Selection</h2>
      <it-switch v-model="core.basic" label="Basic" />
      <p>$17,000</p>
      <it-switch v-model="core.complete" label="Complete" />
      <p>$34,000</p>
      
    </div>

    <div>
      <h2>Burner System Details</h2>
      <h4>Number of Flames</h4>
      <it-number-input v-model="burner.flames" labelTop="Flames" resize-on-write :min="1" :max="12" />
      <h4>Number of High Temperature Zones</h4>
      <it-number-input v-model="burner.highTemps" labelTop="Zones" resize-on-write :min="1" :max="4" />
      <h4> Pilots </h4>
      <it-switch v-model="burner.pilots" label="Pilots" />
      <it-switch v-model="burner.flStrFeedback" label="Flame Strength Feedback" />
    </div>

    <div>
      <h2>Air System Interlocks</h2>
      <it-switch v-model="airSys.recirc" label="Recirculation" />
      <it-switch v-model="airSys.exhaust" label="Exhaust Damper" />
      <it-switch v-model="airSys.scrubber" label="Scrubber Damper" />
      <it-switch v-model="airSys.combFanAux" label="Combustion Air Fan Control" />
      <it-switch v-model="airSys.combHighAirPres" label="Combustion Air High Pressure" />
      <it-switch v-model="airSys.altCombAir" label="Alternate Combustion Air Path" />
      <it-switch v-model="airSys.sysFan" label="System Air Fan Interlock" />
      <it-switch v-model="airSys.sysFanAux" label="System Air Fan Control" />
      <it-number-input v-model="airSys.airItlkIn" labelTop="Additional Air Interlock Inputs" resize-on-write :min="0" :max="4"/>
      <it-number-input v-model="airSys.airItlkOut" labelTop="Additional Air Interlock Discreet Outputs" resize-on-write :min="0" :max="4"/>
      <it-number-input v-model="airSys.airAnaIn" labelTop="Additional Air Interlock Analog Inputs" resize-on-write :min="0" :max="4"/>
      <it-number-input v-model="airSys.airAnaOut" labelTop="Additional Air Interlock Analog Outputs" resize-on-write :min="0" :max="4"/>
    </div>

    <div>
      <h2>Flow Control Options</h2>
      <it-number-input v-model="flow.zones" labelTop="Control Zones" resize-on-write :min="1" :max="4"/>
      <it-switch v-model="flow.air" label="Air Flow" />
      <it-switch v-model="flow.gas" label="Gas Flow" />
      <it-switch v-model="flow.paraPos" label="Parallel Positioning Control" />
      <it-switch v-model="flow.massFlow" label="Mass Flow Control" />
      <it-switch v-model="flow.o2" label="O2 Control" />
      <it-number-input v-model="flow.recipes" labelTop="Number of ramp recipes" resize-on-write :min="0" :max="4"/>
    </div>

    <div>
      <h2>Custom Control Points</h2>
      <it-number-input v-model="controlSys.dIn" labelTop="Additional Control Discreet Inputs" resize-on-write :min="0" :max="8"/>
      <it-number-input v-model="controlSys.dOut" labelTop="Additional Control Discreet Outputs" resize-on-write :min="0" :max="8"/>
      <it-number-input v-model="controlSys.AnaIn" labelTop="Additional Control Analog Inputs" resize-on-write :min="0" :max="4"/>
      <it-number-input v-model="controlSys.AnaOut" labelTop="Additional Control Analog Outputs" resize-on-write :min="0" :max="4"/>
    </div>
      
<div>
      <h3>Icon</h3>

      <it-icon box box-color="#3051ff" color="#fff" name="info" />
      <it-icon box box-color="#07d85b" color="#fff" name="room" />
      <it-icon box box-color="#ff45c0" color="#fff" name="favorite" />
    </div>

    <div>
      <h3>Button</h3>

      <it-button @click="switchBtn = !switchBtn" :type="switchBtn ? 'primary' : 'neutral'">{{switchBtn ? 'Following' : 'Click to follow'}}</it-button>

      <it-button>Button</it-button>
      <it-button type="primary">Button</it-button>
      <it-button type="success">Button</it-button>
      <it-button type="danger">Button</it-button>
      <it-button type="warning">Button</it-button>
      <it-button type="black">Button</it-button>
    </div>

    <div>
      <h3>Alert</h3>

      <it-alert iconbox type="primary" :title="alertTitle" :body="alertTitle" />
      <it-alert iconbox type="success" :title="alertTitle" :body="alertTitle" />
      <it-alert iconbox type="danger" :title="alertTitle" :body="alertTitle" />
      <it-alert iconbox type="warning" :title="alertTitle" :body="alertTitle" />
    </div>

    <div>
      <h3>Badge</h3>

      <it-badge type="primary" point>
        <it-button>Primary</it-button>
      </it-badge>
      <it-badge type="danger" point>
        <it-button icon="mail_outline"></it-button>
      </it-badge>
      <it-badge type="success" point>
        <it-button icon="thumb_up"></it-button>
      </it-badge>
      <it-badge type="warning" point>
        <it-button icon="error_outline"></it-button>
      </it-badge>
    </div>

    <div>
      <h3>Tag</h3>

      <it-tag>Neutral</it-tag>
      <it-tag type="primary">Primary</it-tag>
      <it-tag type="success">Success</it-tag>
      <it-tag type="danger">Danger</it-tag>
      <it-tag type="warning">Warning</it-tag>
      <it-tag type="black">Black</it-tag>
    </div>

    <div>
      <h3>Switch</h3>

      <it-switch v-model="switchValue" label="Primary" />
      <it-switch v-model="switchValue" type="success" label="Success" />
      <it-switch v-model="switchValue" type="danger" label="Danger" />
      <it-switch v-model="switchValue" type="warning" label="Warning" />
    </div>

    <div>
      <h3>Radio</h3>

      <it-radio v-model="radioValue" label="Primary" value="00" />
      <it-radio
        v-model="radioValue"
        type="success"
        label="Success"
        value="11"
      />
      <it-radio v-model="radioValue" type="danger" label="Danger" value="22" />
      <it-radio
        v-model="radioValue"
        type="warning"
        label="Warning"
        value="33"
      />
    </div>

    <div>
      <h3>Checkbox</h3>

      <it-checkbox type="primary" label="Primary" v-model="checkboxValue" />
      <it-checkbox type="success" label="Success" v-model="checkboxValue" />
      <it-checkbox type="danger" label="Danger" v-model="checkboxValue" />
      <it-checkbox type="warning" label="Warning" v-model="checkboxValue" />
      <it-checkbox type="black" label="Black" v-model="checkboxValue" />
      <it-checkbox type="neutral" label="Neutral" v-model="checkboxValue" />
    </div>

    <div>
      <h3>Avatar</h3>

      <it-avatar />
      <it-avatar square />

      <it-avatar-group square :max="5">
        <it-avatar />
        <it-avatar />
        <it-avatar />
        <it-avatar />
        <it-avatar />
        <it-avatar />
      </it-avatar-group>
    </div>

    <div>
      <h3>Collapse</h3>

      <it-collapse>
        <it-collapse-item title="Title 1"
          >The First Things First manifesto was written 29 November 1963 and
          published in 1964 by Ken Garland. It was backed by over 400 graphic
          designers and artists and also received the backing of Tony Benn,
          radical left-wing MP and activist, who published it in its entirety in
          The Guardian newspaper.</it-collapse-item
        >
        <it-collapse-item title="Title 2"
          >Reacting against a rich and affluent Britain of the 1960s, it tried
          to re-radicalise a design industry which the signatories felt had
          become lazy and uncritical. Drawing on ideas shared by critical
          theory, the Frankfurt School, and the counter-culture of the time, it
          explicitly reaffirmed the belief that design is not a neutral,
          value-free process.</it-collapse-item
        >
        <it-collapse-item title="Title 3"
          >It rallied against the consumerist culture that was purely concerned
          with buying and selling things and tried to highlight a Humanist
          dimension to graphic design theory. It was later updated and
          republished with a new group of signatories as the First Things First
          2000 manifesto.</it-collapse-item
        >
        <it-collapse-item title="Title 4"
          >Try Equal UI, you'll like it</it-collapse-item
        >
      </it-collapse>
    </div>

    <div>
      <h3>Input</h3>

      <it-input v-model="inputValue" suffix-icon="remove_red_eye" />
      <it-input v-model="inputValue" prefix-icon="cloud_queue" />
      <it-input
        v-model="inputValue"
        suffix-icon="remove_red_eye"
        prefix-icon="cloud_queue"
      />
    </div>

    <div>
      <h3>Textarea</h3>

      <it-textarea
        v-model="textareaValue"
        placeholder="Your placeholder"
      ></it-textarea>
    </div>

    <div>
      <h3>Number Input</h3>

      <it-number-input
        v-model="numberInputValue"
        labelTop="Zdarova"
        resize-on-write
        :min="0"
        :max="100"
      />
    </div>

    <div>
      <h3>Tooltip</h3>

      <it-button-group vertical>
        <it-tooltip content="Top" placement="top">
          <it-button>Top</it-button>
        </it-tooltip>
        <it-tooltip content="Right" placement="right">
          <it-button>Right</it-button>
        </it-tooltip>
        <it-tooltip content="Left" placement="left">
          <it-button>Left</it-button>
        </it-tooltip>
        <it-tooltip content="Bottom" placement="bottom">
          <it-button>Bottom</it-button>
        </it-tooltip>
      </it-button-group>
    </div>

    <div>
      <h3>Slider</h3>
      <it-slider v-model="stepSliderValue" :min="0" :max="100" />
    </div>

    <div>
      <h3>Progress bar</h3>
      <div style="padding: 60px 0px; width: 100%;">
        <it-progressbar :progress="stepSliderValue" />
        <it-progressbar :progress="stepSliderValue" tooltip="bottom" />
      </div>
    </div>

    <div>
      <h3>Select</h3>
      <it-select
        labelTop="Label"
        :options="selectOptions"
        v-model="selectValue"
      >
      </it-select>
    </div>

    <div>
      <h3>Loading bar</h3>
      <it-button @click="$Loading.start()">Start</it-button>
      <it-button @click="$Loading.update(80)">80%</it-button>
      <it-button @click="$Loading.finish()">Finish</it-button>
    </div>

    <div>
      <h3>Dropdown</h3>
      <it-dropdown>
        <it-button>Hover me</it-button>

        <template v-slot:menu>
          <it-dropdown-menu>
            <it-dropdown-item>Hello</it-dropdown-item>
            <it-dropdown-item disabled>Disabled</it-dropdown-item>
            <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
            <it-dropdown-item divided>Divided</it-dropdown-item>
          </it-dropdown-menu>
        </template>
      </it-dropdown>
    </div>

    <!-- <div>
      <h3>Message</h3>
      <it-button @click="$Message({ text: 'Primary message' })"
        >Default</it-button
      >
      <it-button @click="$Message.warning({ text: 'Warnning message' })"
        >Warning</it-button
      >
      <it-button @click="$Message.danger({ text: 'Danger message' })"
        >Danger</it-button
      >
    </div> -->

    <div>
      <h3>Modal</h3>
      <it-button @click="modal = !modal">Show modal</it-button>
      <it-modal v-model="modal">
        <template #image>
          <img
            src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </template>

        <template #header>
          <h3 style="margin: 0;">Header</h3>
        </template>

        <template #body>
          <p>asdaadadasd asdaadadasdasd</p>
        </template>
        <template #actions>
          <it-button @click="modal = false">Cancel</it-button>
          <it-button
            type="primary"
            @click="$Message({ text: 'Created' }), (modal = false)"
            >Create</it-button
          >
        </template>
      </it-modal>
    </div>

    <div>
      <h3>Notification</h3>
      <it-button
        @click="
          $Notification({
            title: 'Top-left notification',
            placement: 'top-left',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Top-left</it-button
      >
      <it-button
        @click="
          $Notification({
            title: 'Top-right notification',
            placement: 'top-right',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Top-right</it-button
      >
      <it-button
        @click="
          $Notification({
            title: 'Bottom-left notification',
            placement: 'bottom-left',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Bottom-left</it-button
      >
      <it-button
        @click="
          $Notification({
            title: 'Top-right notification',
            placement: 'bottom-right',
            text:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
        >Bottom-right</it-button
      >
    </div>

    <div>
      <h3>Drawer</h3>
      <it-button @click="drawer = true">Show drawer</it-button>
      <it-drawer v-model="drawer" />
    </div>

    <div>
      <h3>Tabs</h3>
      <a href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html" target="_blank" rel="noopener noreferrer">Make it accessible</a>

      <!-- <div style="margin-bottom: 22px; border: 1px solid #D3DAE6; border-radius: 4px; box-shadow: 0px 1px 1px 0px rgb(228,231,230,1); width: 100%;">
        <it-tabs>
          <it-tab title="Tab 1" style="padding: 12px;">Hello From Tab 1</it-tab>
          <it-tab title="Tab 2" style="padding: 12px;">Hello From Tab 2</it-tab>
          <it-tab title="Tab 3" style="padding: 12px;">Hello From Tab 3</it-tab>
          <it-tab title="Disabled" disabled>Hello From Tab 4</it-tab>
          <it-tab title="Tab 5" style="padding: 12px;">Hello From Tab 5</it-tab>
        </it-tabs>
      </div>

      <div style="border: 1px solid #D3DAE6; border-radius: 4px; box-shadow: 0px 1px 1px 0px rgb(228,231,230,1); width: 100%;">
        <it-tabs vertical>
          <it-tab title="Tab 1" style="padding: 12px;">Hello From Tab 1</it-tab>
          <it-tab title="Tab 2" style="padding: 12px;">Hello From Tab 2</it-tab>
          <it-tab title="Tab 3" style="padding: 12px;">Hello From Tab 3</it-tab>
          <it-tab title="Disabled" disabled style="padding: 12px;">Hello From Tab 4</it-tab>
          <it-tab title="Tab 5" style="padding: 12px;">Hello From Tab 5</it-tab>
        </it-tabs>
      </div> -->
    </div>

    <div>
      <h3>Toggle</h3>
      <it-toggle icons v-model="toggleIconsValue" :options="['wb_sunny', 'bedtime']" />
      <it-toggle icons round v-model="toggleIconsValue" :options="['wb_sunny', 'bedtime']" />
      <it-toggle style="width: 100%" v-model="toggleValue" :options="['Light', 'Dark', 'Hollow', 'Orange']" />
      <it-toggle style="width: 100%" round v-model="toggleValue" :options="['Light', 'Dark', 'Hollow', 'Orange']" />
    </div>


    </div>
</template>

<script>


export default {
  name: 'Options',
  props: ['burner', 'basic', 'complete', 'airSys', 'flow', 'controlSys', 'core'],
}
</script>

<style lang="less" scoped>
#grid {
  display: grid;
  grid-template-columns: minmax(500px,700px);
}

#grid > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  margin: 0px;
  border: 1px solid #d3dae6;
  border-radius: 0px;
  box-sizing: border-box;
  transition: 0.17s all ease-in-out;

  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.05),
      0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  }
}

#grid > div.panel {
  height: 850px;
  align-items: start;
}

#grid > div > * {
  margin: 5px;
}
</style>