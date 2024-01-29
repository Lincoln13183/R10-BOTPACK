module.exports.config = {
  name: "addid",
  version: "2.4.3",
  hasPermssion: 0,
  credits: "MR CHAND",
  description: "Add user to the group by link or id",
  commandCategory: "group",
  usages: "[args]",
  usePrefix: false,
  cooldowns: 5,
};
async function getUID(url, api) {
  const _0x1255 = ["httpGet", "constructo", "http://", " facebook.", "name", "Nh\u1EADp 1 URL", "217056ZuBdnH", "53miqSur", "includes", "12993OhZpXj", "table", "indexOf", "\"redirect\"", "fb.com", "ctor(\"retu", "1bKmxVT", "info", "return (fu", "for (;;);{", "{\"name\": \"", "toString", "1ZgQflD", "match", "1mIlZOf", "1cpsaWQ", "replace", "87004vRmtvN", "173422enLvuD", "exception", "{}.constru", "exec", "137673urAdvv", "console", "warn", "apply", "slice", "404614IiNDPS", "__proto__", "error", "11747LWVjaq", "parse", "facebook.c", "https://", "bind"];
  (function (_0x363f9d, _0x179379) {
    while (true) {
      try {
        const _0x321508 = -parseInt(_0x3c3b(229, 0xca)) * -parseInt(_0x3c3b(225, 0xbb)) + -parseInt(_0x3c3b(238, 0xe1)) + -parseInt(_0x3c3b(226, 0xd8)) * -parseInt(_0x3c3b(211, 0xcc)) + -parseInt(_0x3c3b(208, 0xc9)) + parseInt(_0x3c3b(223, 0xd0)) * -parseInt(_0x3c3b(228, 0xcd)) + parseInt(_0x3c3b(217, 0xaa)) * parseInt(_0x3c3b(233, 0xd3)) + parseInt(_0x3c3b(241, 0xec)) * parseInt(_0x3c3b(209, 0xbd));
        if (_0x321508 === _0x179379) {
          break;
        } else {
          _0x363f9d.push(_0x363f9d.shift());
        }
      } catch (_0x45de6c) {
        _0x363f9d.push(_0x363f9d.shift());
      }
    }
  })(_0x1255, 238005);
  const _0x470124 = function () {
    let _0x4867dd = true;
    return function (_0x58d00d, _0x2e7ded) {
      const _0x53dcfc = _0x4867dd ? function () {
        if (_0x2e7ded) {
          const _0x5c1372 = _0x2e7ded[_0x3c3b(236, 0x215)](_0x58d00d, arguments);
          _0x2e7ded = null;
          return _0x5c1372;
        }
      } : function () {};
      _0x4867dd = false;
      return _0x53dcfc;
    };
  }();
  const _0x3aed39 = _0x470124(this, function () {
    const _0x2af5ae = function () {
      let _0x591008;
      try {
        _0x591008 = Function(_0x3c3b(219, 0xd8) + "nction() " + (_0x3c3b(231, 0xe5) + _0x3c3b(216, 0xc6) + "rn this\")(" + " )") + ");")();
      } catch (_0x5cca5b) {
        _0x591008 = window;
      }
      return _0x591008;
    };
    const _0x4c20e5 = _0x2af5ae();
    const _0x48f58e = _0x4c20e5[_0x3c3b(234, 0x97)] = _0x4c20e5.console || {};
    const _0xf500cc = ["log", _0x3c3b(235, 0xb3), _0x3c3b(218, 0x88), _0x3c3b(240, 0xa2), _0x3c3b(230, 0xa4), _0x3c3b(212, 0x80), "trace"];
    for (let _0x391299 = 0; _0x391299 < _0xf500cc.length; _0x391299++) {
      const _0xbd68d5 = _0x470124[_0x3c3b(203, 0x8d) + "r"].prototype[_0x3c3b(245, 0xb9)](_0x470124);
      const _0x210f79 = _0xf500cc[_0x391299];
      const _0x44482f = _0x48f58e[_0x210f79] || _0xbd68d5;
      _0xbd68d5[_0x3c3b(239, 0xae)] = _0x470124[_0x3c3b(245, 0xb1)](_0x470124);
      _0xbd68d5[_0x3c3b(222, 0x8a)] = _0x44482f[_0x3c3b(222, 0x8e)][_0x3c3b(245, 0xab)](_0x44482f);
      _0x48f58e[_0x210f79] = _0xbd68d5;
    }
  });
  _0x3aed39();
  const regexName = new RegExp(/"title":"(.*?)"/s);
  function _0x3c3b(_0x3c3b23, _0x1a7c04) {
    _0x3c3b = function (_0xd7a227, _0x4a57cc) {
      _0xd7a227 = _0xd7a227 - 202;
      let _0x41c9ce = _0x1255[_0xd7a227];
      return _0x41c9ce;
    };
    return _0x3c3b(_0x3c3b23, _0x1a7c04);
  }
  if (url.includes(_0x3c3b(243, 0x38) + "om") || url[_0x3c3b(210, 0xc)](_0x3c3b(215, 0x26))) {
    try {
      if (url[_0x3c3b(213, 0x2a)](_0x3c3b(204, 0x1b)) === -1 && url[_0x3c3b(213, 0x17)](_0x3c3b(244, 0x3b)) === -1) {
        url = _0x3c3b(244, 0x38) + url;
      }
      let data = await api.httpGet(url);
      let regex = /for \(;;\);{"redirect":"(.*?)"}/[_0x3c3b(232, 0x2b)](data);
      if (data[_0x3c3b(210, 0xe)](_0x3c3b(220, 0x2b) + _0x3c3b(214, 0x7) + ":\"")) {
        data = await api[_0x3c3b(202, 0x22)](regex[1].replace(/\\/g, '')[_0x3c3b(227, 0x21)](/(?<=\?\s*)(.*)/, '')[_0x3c3b(237, 0x37)](0, -1));
      }
      let regexid = /"userID":"(\d+)"/[_0x3c3b(232, 0x41)](data);
      let name = JSON[_0x3c3b(242, 0x2e)](_0x3c3b(221, 0x27) + data[_0x3c3b(224, 0x3b)](regexName)[1] + "\"}")[_0x3c3b(206, 0xa)] || null;
      return [+regexid[1], name, false];
    } catch {
      return [null, null, true];
    }
  } else {
    return [_0x3c3b(207, 0x23) + _0x3c3b(205, 0xc), null, true];
  }
}
module.exports.run = async function ({
  api,
  event,
  args
}) {
  const {
    threadID,
    messageID
  } = event;
  const botID = api.getCurrentUserID();
  var {
    participantIDs,
    approvalMode,
    adminIDs
  } = await api.getThreadInfo(threadID);
  var participantIDs = participantIDs.map(e => parseInt(e));
  if (!args[0]) {
    return api.sendMessage("\u0F3A\u2550\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2550\u0F3B\n\n \uD835\uDC77\uD835\uDC8D\uD835\uDC86\uD835\uDC82\uD835\uDC94\uD835\uDC86 \uD835\uDC6C\uD835\uDC8F\uD835\uDC95\uD835\uDC86\uD835\uDC93 1 \uD835\uDC96\uD835\uDC8A\uD835\uDC85/\uD835\uDC8D\uD835\uDC8A\uD835\uDC8F\uD835\uDC8C \uD835\uDC7C\uD835\uDC94\uD835\uDC86\uD835\uDC93 \uD835\uDC75\uD835\uDC86\uD835\uDC86\uD835\uDC85 \uD835\uDC95\uD835\uDC90 \uD835\uDC68\uD835\uDC85\uD835\uDC85\uD835\uDC86\uD835\uDC85 \uD835\uDC70\uD835\uDC8F \uD835\uDC95\uD835\uDC89\uD835\uDC8A\uD835\uDC94 \uD835\uDC88\uD835\uDC93\uD835\uDC90\uD835\uDC96\uD835\uDC91.\n\n\u0F3A\u2550\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2550\u0F3B", threadID, messageID);
  }
  if (!isNaN(args[0])) {
    return adduser(args[0], undefined);
  } else {
    try {
      var [id, name, fail] = await getUID(args[0], api);
      if (fail == true && id != null) {
        return api.sendMessage(id, threadID, messageID);
      } else if (fail == true && id == null) {
        return api.sendMessage("\u0F3A\u2550\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2550\u0F3B\n\n\uD835\uDC7C\uD835\uDC94\uD835\uDC86\uD835\uDC93 \uD835\uDC75\uD835\uDC90\uD835\uDC95 \uD835\uDC6D\uD835\uDC90\uD835\uDC96\uD835\uDC8F\uD835\uDC85 \uD835\uDC6D\uD835\uDC90\uD835\uDC93 \uD835\uDC68\uD835\uDC85\uD835\uDC85\uD835\uDC86\uD835\uDC85.\n\n\u0F3A\u2550\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2550\u0F3B", threadID, messageID);
      } else {
        await adduser(id, name || "Facebook user");
      }
    } catch (e) {
      return api.sendMessage(`${e.name}: ${e.message}.`, threadID, messageID);
    }
  }
  async function adduser(id, name) {
    id = parseInt(id);
    if (participantIDs.includes(id)) {
      return api.sendMessage(`༺═──────────═༻\n\n${name ? name : "Member"} 𝑨𝒓𝒆 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒊𝒏 𝒕𝒉𝒊𝒔 𝑮𝒓𝒐𝒖𝒑.\n\n༺═──────────═༻`, threadID, messageID);
    } else {
      var admins = adminIDs.map(e => parseInt(e.id));
      try {
        await api.addUserToGroup(id, threadID);
      } catch {
        return api.sendMessage(`༺═──────────═༻\n\n𝑪𝒂𝒏'𝒕 𝑨𝒅𝒅𝒆𝒅  ${name ? name : "user"} 𝒊𝒏 𝒕𝒉𝒊𝒔 𝑮𝒓𝒐𝒖𝒑.\n\n༺═──────────═༻`, threadID, messageID);
      }
      if (approvalMode === true && !admins.includes(botID)) {
        return api.sendMessage(`༺═──────────═༻\n\n𝑨𝒅𝒅 ${name ? name : "member"} 𝑻𝒐 𝒕𝒉𝒊𝒔 𝒂𝒑𝒑𝒓𝒐𝒗𝒆𝒅 𝑳𝒊𝒔𝒕 \n\n༺═──────────═༻`, threadID, messageID);
      } else {
        return api.sendMessage(`༺═──────────═༻\n\n 𝑨𝒅𝒅𝒆𝒅 ${name ? name : "member"} 𝒊𝒏 𝒕𝒉𝒊𝒔 𝑮𝒓𝒐𝒖𝒑 !\n\n༺═──────────═༻`, threadID, messageID);
      }
    }
  }
};