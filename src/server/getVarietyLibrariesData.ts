import { get } from "./base";

export default function getVarietyLibrariesData(
  page: number,
  kws: Array<string>,
) {
  return get(`/api/variety/variety-libraries?page=${page}&kws=${kws}`).then(
    (res) => {
      return res.data.items;
    },
  );
}
