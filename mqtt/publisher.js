import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://broker.hivemq.com:1883');
const topic = 'test/pocMaster';

const message = {
  status: "stopped",
  deviceId: "01"
};


client.on('connect', () => {
  console.log('Connected to MQTT broker.');
  client.publish(topic, JSON.stringify(message), (err) => {
    if (err) {
      console.error('Error publishing message:', err);
    } else {
      console.log('Message published successfully');
    }
  });
  client.end()
});

client.on('error', (err) => {
  console.error('Error with MQTT connection:', err);
});