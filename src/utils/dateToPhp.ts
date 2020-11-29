export default (date: Date) => {
  let month = "";
  let day = "";
  let year = date.getFullYear();
  let final = "";

  if (date.getMonth() + 1 < 10) {
    month = "0" + (date.getMonth() + 1).toString();
  } else month = (date.getMonth() + 1).toString();

  if (date.getUTCDate() < 10) {
    day = "0" + date.getUTCDate().toString();
  } else day = date.getUTCDate().toString();

  if (date.getHours() < 10) {
    final = `${year}-${month}-${day} 12:00:00`;
  } else final = `${year}-${month}-${day} 12:00:00`;

  return final;
};
