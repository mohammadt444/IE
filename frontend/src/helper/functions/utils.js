export const toPersian = (text) => {
  if (text == null) return text;
  if (typeof text === "number") return text.toLocaleString("fa-IR");
  if (typeof text === "string")
    return text.replace(/[0-9]/g, (num) =>
      parseInt(num).toLocaleString("fa-IR")
    );
};
