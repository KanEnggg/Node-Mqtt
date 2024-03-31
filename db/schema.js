import DataTypes from "sequelize";
import {sequelize} from "./sql.js";

const Device = sequelize.define('Device', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
});

const Sensor = sequelize.define('Sensor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: DataTypes.STRING,
    unit: DataTypes.STRING,
});

const SensorReading = sequelize.define('SensorReading', {
    value: DataTypes.FLOAT,
});

Device.hasMany(Sensor, { foreignKey: 'deviceId' });
Sensor.belongsTo(Device, { foreignKey: 'deviceId' });

Sensor.hasMany(SensorReading, { foreignKey: 'sensorId' });
SensorReading.belongsTo(Sensor, { foreignKey: 'sensorId' });


export {Device, Sensor, SensorReading};