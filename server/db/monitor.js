const { model,mongoose } = require('./libs/model');
const myModel = new model('monitor', {
    ajaxs: [
      new mongoose.Schema({
        end: Number,
        endBytes: Number,
        interval: Number,
        start: Number,
        startBytes: Number,
        type: {type: String},
        url: String
      })
    ],
    dpi: {
      width: Number,
      height: Number
    },
    network: {
      bandwidth: Number,
      type: {type: String},
    },
    time: {
      TTFB: Number,
      appcacheTime: Number,
      connectSslTime: Number,
      connectTime: Number,
      domReadyTime: Number,
      firstPaintTime: Number,
      firstScreen: Number,
      initDomTreeTime: Number,
      loadEventTime: Number,
      loadTime: Number,
      lookupDomainTime: Number,
      parseDomTime: Number,
      readyStart: Number,
      redirectTime: Number,
      requestDocumentTime: Number,
      requestTime: Number,
      responseDocumentTime: Number,
      unloadEventTime: Number
    },
    created: Number,
    token: String,
    agent: {
      ua: String,
      browser: {
          name: String,
          version: String,
          major: String
      },
      engine: {
          name: String,
          version: String
      },
      os: {
          name: String,
          version: String
      },
      device: {
          vendor: { type: String, default: undefined },
          model: { type: String, default: undefined },
          type: { type: String, default: undefined }
      },
      cpu: {
          architecture: { type: String, default: undefined }
      }
    },
    url: String
});

class Mongodb {
  save (obj) {
    return myModel.save(obj);
  }
}
module.exports = new Mongodb();
