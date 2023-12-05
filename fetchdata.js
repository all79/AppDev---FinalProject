const submitBtn = document.getElementById('submitted');
const lname = document.getElementById('inp1');
const fname = document.getElementById('inp2');
const cnum =  document.getElementById('inp3');
const email = document.getElementById('inp4');
const address = document.getElementById('inp5');
const service = document.getElementById ('service_opt');
const opddept = document.getElementById('opd_selected');
const raddept = document.getElementById('radiology_selected');
const entsched = document.getElementById('ENT_sched');
const opthsched = document.getElementById('Opth_sched');
const pediasched = document.getElementById('Pedia_sched');
const cardiosched = document.getElementById('Cardio_sched');
const gynesched = document.getElementById('Gyne_sched');
const pulmosched = document.getElementById('Pulmo_sched');
const ultrasched = document.getElementById('Ultrasound_sched');
const xraysched = document.getElementById('Xray_sched');
const ctsched = document.getElementById('CT_sched');


submitBtn.addEventListener('click', async () => {
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lname: lname.value,
          fname: fname.value,
          cnum: cnum.value,
          email: email.value,
          address: address.value,
          service: service.value,
          opddept: opddept.value,
          raddept: raddept.value,
          entsched: entsched.value,
          opthsched: opthsched.value,
          pediasched: pediasched.value,
          cardiosched: cardiosched.value,
          gynesched: gynesched.value,
          pulmosched: pulmosched.value,
          ultrasched: ultrasched.value,
          xraysched: xraysched.value,
          ctsched: ctsched.value,
        }),
      });
  
      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
