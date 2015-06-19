import can from 'can/';
import template from './cali-form.stache!';

import 'can/map/define/';
import './cali-form.less!';
import 'components/cali-rte/';

let CaliForm = can.Map.extend({
  define: {
    content: {
      type: 'string'
    }
  }
});

export default can.Component.extend({
  template,
  tag: 'cali-form',
  viewModel: CaliForm
});
