import http from "./httpService";

const apiEndpoint = "/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db";

let allEquipments = [];

async function getEquipments(max, last) {
  const results = await http.get(`${apiEndpoint}&max=${max}&last=${last}`);
  const equipments = results.data;

  return equipments;
}

export async function getAllEquipments() {
  if (allEquipments.length > 0) return allEquipments;

  let equipments = await getEquipments(100, 0);

  while (equipments.length) {
    allEquipments = allEquipments.concat(equipments);
    const last = equipments[equipments.length - 1].__rowid__;
    console.log(equipments.length);
    equipments = await getEquipments(100, last);
  }

  return allEquipments;
}

export function getOperationalStatus() {
  if (allEquipments.length == 0) getAllEquipments();

  let operational = 0;

  allEquipments.forEach((equipment) => {
    if (equipment.OperationalStatus == "Operational") operational++;
  });

  return {
    Operational: operational,
    "Non-Operational": allEquipments.length - operational,
  };
}
