import http from "./httpService";

const apiEndpoint = "/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db";
class EquipentService {
  async getEquipments(max, last) {
    const results = await http.get(`${apiEndpoint}&max=${max}&last=${last}`);
    const equipments = results.data;

    return equipments;
  }

  async getAllEquipments() {
    let allEquipments = [];
    let equipments = await this.getEquipments(100, 0);

    while (equipments.length) {
      allEquipments = allEquipments.concat(equipments);
      const last = equipments[equipments.length - 1].__rowid__;
      equipments = await this.getEquipments(100, last);
    }

    return allEquipments;
  }

  async getOperationalStatus(allEquipments) {
    let operational = 0;

    allEquipments.forEach((equipment) => {
      if (equipment.OperationalStatus === "Operational") operational++;
    });

    return {
      operational: operational,
      nonOperational: allEquipments.length - operational,
    };
  }

  async getNumberOfEquipmentsWithTypes(allEquipments) {
    let map = new Map();

    allEquipments.forEach((equipment) => {
      if (map.has(equipment.AssetCategoryID)) {
        map.set(
          equipment.AssetCategoryID,
          map.get(equipment.AssetCategoryID) + 1
        );
      } else map.set(equipment.AssetCategoryID, 1);
    });
    return map;
  }
}

const equipmentService = new EquipentService();

export default equipmentService;
