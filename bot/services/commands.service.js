const { inlinemenuBtn } = require("../helpers/inline-menu.helper");
const { InlineKeyboard } = require("grammy");

const startService = async (ctx) => {
  await ctx.reply(
    `<b>Good morning <a href="tg://user?id=${ctx.from.id}">${
      ctx.from.first_name
    } ${
      ctx.from.last_name || ""
    }</a>. Welcome to our bot. Let's get to know each other! Enter your name, please</b>`,
    {
      parse_mode: "HTML",
    }
  );

  ctx.session.step = "auth";
};

const helpService = async (ctx) => {
  const shareURL = `https://t.me/abdulaziz_programmer`;
  const keyboard = new InlineKeyboard().url("Support", shareURL);
  await ctx.reply(
    `Are you struggling or have any questions❓\n \n Contact with us✅`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
};

const shareService = async (ctx) => {
  const shareURL = `https://t.me/share/url?url=https://t.me/technolifesupportbott`;
  const keyboard = new InlineKeyboard().url("Share Bot", shareURL);
  await ctx.replyWithPhoto(
    "https://telegra.ph/file/b58bf5310e124e462572b.jpg",
    {
      caption: `Dear user, please send this bot to your loved ones to support our creativity and share the goodness.🚀`,
      parse_mode: "HTML",
      reply_markup: keyboard,
    }
  );
};

module.exports = { startService, shareService, helpService };
