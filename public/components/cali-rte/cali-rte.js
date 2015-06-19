import can from 'can/';
import Scribe from 'scribe-editor';
import template from './cali-rte.stache!';
import scribeToolbar from 'scribe-plugin-toolbar';

import 'can/map/define/';
import './cali-rte.less!';

let CaliRTE = can.Map.extend({
  define: {
    content: {
      type: 'string'
    }
  }
});

export default can.Component.extend({
  template,

  tag: 'cali-rte',

  viewModel: CaliRTE,

  events: {
    inserted: function(el) {
      this.initScribe(el);
    },

    initScribe: function(el) {
      let scribeEl = el.find('.scribe').get(0);
      let toolbarEl = el.find('.toolbar').get(0);

      let scribe = new Scribe(scribeEl);
      let toolbar = scribeToolbar(toolbarEl);

      scribe.on('content-changed', () => {
        this.scope.attr('content', scribe.getHTML());
      });

      scribe.use(toolbar);
    }
  }
});
