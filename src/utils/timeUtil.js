import moment from "moment";

export const mappedData = (data) => {
  let array = [];
  array.push(
    data?.map((match) => {
      match.startHour = moment(match.startTime).format("HH: mm");

      match.startTime = moment(match.startTime).format("M월 D일 (ddd)");

      return match;
    })
  );
  return array;
};

export const groupByArray = (xs, key) => {
  if (xs === undefined) {
    return "noSchedule";
  }
  return xs.reduce(function (rv, x) {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find((r) => r && r.key === v);
    if (el) {
      el.values.push(x);
    } else {
      rv.push({ key: v, values: [x] });
    }
    return rv;
  }, []);
};
