scosnt url =`https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
const $form = document.getElementById('diet-form'); 
//form : html 폼요소 Id 속성을가진 요소를 찾아서 반환//
const $frameContainer = document.querySelector('.frame-container');
//frame-container라는 클래스를 가진 HTML요소//
//async(비동기 asynochronous) e 매개변수
$form.addEventListener('submit',asynce e=>{
    e.preventDefault();

    const type = document.getElementById('type').value;
    const days = document.getElementById('days').value;
    const extrafood = document.getElementById('extrafood').value;
    const work1 = document.getElementById('work1').checked;
    const work2 = document.getElementById('work2').checked;
    const work3 = document.getElementById('work3').checked;
    const work4 = document.getElementById('work4').checked;

let purpose= ";
if(work1)purpose+='체중증가';
if(work2)purpose+='체중감량';
if(work3)purpose+='체중유지';
if(work4)purpose+='근육증가';

    const data ={
        "role":"system",
        "content":`운동종류:${type},식단기간:${days},못 먹는 음식:${extrafood},목적:${purpose}등을 활용해서 운동식단을 짜드리겠습니다.`
    }

    // const response 함수의 실행결과를 저장하는 변수 await: promise 함수가 완료 될때까지 실행을 일시중지 fetch:HTTP 요청을 보내는 함수
    // post: 새로운 데이터 생성 get:데이터 조회
    const response = await fetch(url,
        {
            method:'POST',
            headers:{
                'content-Type':'aplication/json'
            },
            body:JSON,stringify([data]),
            redirect:'follow'
        });
        const result = await response.json();
        const numDays = parselnt(days,10)||1;
        $frameContainer.innerHTML = ";
        // "parsent"는 자바 내장함수
        for(let i = 1; i<=numDays;i++){
            const frame = document.createElement('div');
            frame.className = 'frame';
            frame.innerHTML = `
            <h3>Day ${i}</h3>
            <p>${result.choice[0].message.content}</p>
            `
            $frameContainer.appendChild(frame);
        }
});
</script>