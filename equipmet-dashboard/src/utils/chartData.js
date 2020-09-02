import equipmentService from "../services/equipmentService";

export async function getTypes(allEquipments) {
  let types = [];
  let values = [];

  const equipmentDetails = await equipmentService.getNumberOfEquipmentsWithTypes(
    allEquipments
  );

  equipmentDetails.forEach((value, key) => {
    types.push(key);
    values.push(value);
  });

  return { types, values };
}
