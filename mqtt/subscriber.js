import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://broker.hivemq.com:1883');
const topic = 'test/pocMaster';

client.on('connect', () => {
  console.log('Connected to MQTT broker.');

  // Subscribe to the topic
  client.subscribe(topic, (err) => {
    if (err) {
      console.error('Error subscribing to topic:', err);
    } else {
      console.log('Subscribed to topic:', topic);
    }
  });
});

client.on('message', (receivedTopic, message) => {
  console.log('Received message on topic:', receivedTopic);
  console.log('Message:', message.toString());
});

client.on('error', (err) => {
  console.error('Error with MQTT connection:', err);
});
