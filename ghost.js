const quiz = { 
    q0 : "ตอนนี้คุณเลิกเรียนแล้ว แต่เพื่อนคุณชวนไปเที่ยวหลังจากเลิกเรียนเพราะพรุ่งนี้เป็นวันเสาร์ คุณจึง...",
    q1 : "คุณเจอกับ รปภ. ของหอพัก เขายิ้มให้กับคุณพร้อมพูดว่า “วันนี้วันศุกร์นะครับ” คุณจึง...",
    q2 : "คุณถามเพื่อนกว่ากลับกี่โมง เพื่อนคุณตอบประมาณ 4 ทุ่มเกือบ 5 ทุ่มก็กลับแล้ว คุณจึง...",
    q3 : "คุณกลับมาถึงห้องแล้วนึกขึ้นได้ว่าคืนนี้คุณต้องหาเพื่อนมานอนด้วยหนึ่งคน คุณจึงชวนเพื่อนให้มานอนด้วย เพื่อนของคุณตอบรับคำชวนของคุณ จากนั้นคุณจึง...",
    q4 : "คุณกลับมาถึงห้องของตัวเอง หลังจากนั้นคุณจึง...",
    q5 : "ท่านเที่ยวเล่นกับเพื่อนจนตอนนี้เวลาให้จะ 5 ทุ่มแล้ว คุณจึง...",
    q6 : "ระหว่างที่ท่านหาอะไรทำรอเพื่อนมาตอนนี้ก็เป็นเวลา 22.56 น. แล้ว และในเวลานั้นท่านได้ยินเสียงคนเคาะประตูห้องคุณ คุณจึง...",
    q7 : "เมื่อคุณถึงหอเพื่อน คุณจึง...",
    q8 : "ตอนนี้เวลา 22.58 น. แล้ว เพิ่งมาถึงหอพักของคุณ คุณกับเพื่อนเดินเข้าไปในหอพักเพื่อขึ้นห้อง ระหว่างทางเดินขึ้นบรรไดชั้นที่สอง คุณและเพื่อนสังเกตเห็นผู้หญิงในกระจก เพื่อนคุณมีสีหน้าที่ตกใจอย่างมาก คุณจึง...",
    q9 : "ท่านไม่เห็นใครผ่านตาแมวเลย ท่านจึง...",
    q10 : "ท่านเปิดมาแล้วไม่เจอใครหน้าห้อง ท่านจึง...",
    q11 : "ตอนนี้เช้าแล้ว คุณมาที่ห้องของคุณ แต่คุณกลับรับรู้ได้ถึงสิ่งผิดปกติจากในห้องน้ำและใต้เตียง คุณจึง...",
    q12 : "หญิงสาวคนนั้นหายไปแล้ว คุณกับเพื่อนจึงเดินขึ้นห้องต่อ แต่ระหว่างนั้นคุณกับเพื่อนได้ยินเสียงเหมือนคนใส่รองเท้าส้นสูงเดินตามมา คุณจึง...",
    q13 : "เมื่อคุณเดินกลับมานั่งในห้อง เสียงเคาะดังขึ้นอีกครั้งพร้อมกับเสียงพูดว่า “เฮ้ย ช่วยกูด้วยเปิดประตูให้กูที กูได้ยินเสียงเหมือนคนใส่ส้นสูงเดินตามกูมา!!” คุณจำได้ว่านั่นคือเสียงของเพื่อนคุณ คุณจึง...",
    q14 : "เสียใจด้วยนะ คุณตัดสินใจพลาดแล้ว",
    q15 : "เมื่อคุณและเพื่อนมาถึงห้องแล้ว คุณและเพื่อนแยกย้ายกันอาบน้ำเตรียมตัวนอน ระหว่างที่กำลังนอน พวกคุณได้ยินเสียงคนเคาะประตู พร้อมกับเสียงพูดว่า “สวัสดี ผมมาทำความสะอาดห้องของคุณ” คุณจึง",
    q16 : "เสียงเคาะเงียบหายไปแล้ว พร้อมเสียงแจ้งเตือนข้อความจากเพื่อนของคุณว่าเขามาไม่ได้แล้วเพราะตอนนี้เวลา 23.05 แล้วขอโทษด้วย คุณจึง...",
    q17 : "ตอนส่องที่ตาแมวคุณไม่เห็นใครแต่คุณก็นึกขึ้นได้ว่าพนักงานทำความสะอาดที่นี่ไม่สามารถมองเห็นผ่านตาแมวได้ คุณจึง...",
    q18 : "ระหว่างทางเดิน คุณได้ยินเสียงเหมือนคนใส่รองเท้าส้นสูงเดินตามคุณมาอย่างรวดเร็วพร้อมเสียงกรี้ด คุณจึง...",
    q19 : "คุณคิดถูกแล้วล่ะ ที่นี่มีแต่แม่บ้าน ไม่มีพ่อบ้านสักหน่อย หลังจากนั้นคุณจึง...",
    q20 : "คุณทำได้ดีมาก การตัดสินใจของคุณสามารถรอดผ่านคืนนี้ไปได้อย่างปลอดภัย ยินดีด้วยที่รอดมาได้อีกหนึ่งคืน"
    };
    const Btn0 = {
    q0 : "ปฏิเสธ และกลับห้องเพื่อพักผ่อน",
    q1 : "ไปต่อไม่สนใจ",
    q2 : "บอกเพื่อนว่าไม่ไปแล้วขอกลับห้อง",
    q3 : "เล่นเกม",
    q4 : "เล่นเกม",
    q5 : "ขอไปนอนหอเพื่อน",
    q6 : "ลุกไปเปิดประตู",
    q7 : "นั่งคุยเล่นกับเพื่อนต่อจนเช้า",
    q8 : "รีบวิ่งหนีกับเพื่อน",
    q9 : "ไม่สนใจ กลับไปนั่งทำอย่างอื่นต่อ",
    q10 : "ยื่นหน้าออกไปดูบริเวณหน้าห้อง",
    q11 : "ก้มดูใต้เตียง",
    q12 : "รีบพาเพื่อนวิ่งเลย",
    q13 : "ทำเป็นไม่ได้ยิน เพราะคุณเองก็กลัว เลยไม่ลุกไปเปิด",
    q14 : "###",
    q15 : "ลุกไปเปิดประตูให้เพราะเป็นพนักงานดูแลและทำความสะอาด",
    q16 : "รีบเข้านอนเลยเพราะกลัว",
    q17 : "ไม่สนใจ กลับไปนั่งในห้อง",
    q18 : "ทำเป็นไม่สนใจค่อย ๆ เดินไปที่ห้องพิเศษชั้นล็อบบี้",
    q19 : "นั่งคุยกับเพื่อนก่อนเข้านอน",
    q20 : "****"
    };
    const Btn1 = {
    q0 : "ไปเที่ยวกับเพื่อน",
    q1 : "โทรหาเพื่อนชวนเพื่อนมานอนด้วยคืนนี้",
    q2 : "ไปเที่ยวต่อ",
    q3 : "ทำงาน",
    q4 : "ทำงาน",
    q5 : "ขอให้เพื่อนขับรถไปส่งที่หอแล้วนอนเป็นเพื่อน",
    q6 : "ดูว่าใครมาผ่านตาแมว",
    q7 : "อาบน้ำและเข้านอน",
    q8 : "ตั้งสติ แล้วพูดชมเธอคนนั้น",
    q9 : "สงสัยว่าอาจจะเป็นเพื่อนมาเคาะแล้วยืนจุดที่ตาแมวมองไม่เห็น จึงเปิดประตู",
    q10 : "รีบปิดประตูหันหลังกลับเข้าห้องอย่างรวดเร็ว",
    q11 : "เปิดประตูห้องน้ำเข้าไปดู",
    q12 : "จับไหล่ปลอบใจเพื่อน และพาเพื่อนเดินไปเรื่อย ๆ จนกว่าจะถึงห้อง",
    q13 : "รีบไปเปิดประตูช่วยเพื่อนของคุณ",
    q14 : "###",
    q15 : "สงสัย จึงเดินไปส่องที่ตาแมว",
    q16 : "กลั้นใจออกจากห้องเดินไปที่ห้องพิเศษที่ชั้นล็อบบี้",
    q17 : "เปิดประตูให้",
    q18 : "ตกใจรีบวิ่งหนีเพื่อความปลอดภัย",
    q19 : "เข้านอนเลยทันทีพร้อมเพื่อน",
    q20 : "****"
    };
    const img = {
        q0 : "./img/bg0.jpg",
        q1 : "./img/bg1.jpg",
        q2 : "./img/bg2.jpg",
        q3 : "./img/bg3.jpg",
        q4 : "./img/bg4.jpg",
        q5 : "./img/bg5.jpg",
        q6 : "./img/bg6.jpg",
        q7 : "./img/bg7.jpg",
        q8 : "./img/bg8.jpg",
        q9 : "./img/bg9.jpg",
        q10 : "./img/bg10.jpg",
        q11 : "./img/bg11.jpg",
        q12 : "./img/bg12.jpg",
        q13 : "./img/bg13.jpg",
        q14 : "./img/jumpscare2.jpeg",
        q15 : "./img/bg15.jpg",
        q16 : "./img/bg16.jpg",
        q17 : "./img/bg17.jpg",
        q18 : "./img/bg18.jpg",
        q19 : "./img/bg19.jpg",
        q20 : "./img/bg20.jpg"
    };


    const soundBGsrc = {
        q0 : "./audio/sbg0.mp3",
        q1 : "./audio/sbg0.mp3",
        q2 : "./audio/sbg0.mp3",
        q3 : "./audio/sbg0.mp3",
        q4 : "./audio/sbg0.mp3",
        q5 : "./audio/sbg0.mp3",
        q6 : "./audio/sbg0.mp3",
        q7 : "./audio/sbg0.mp3",
        q8 : "./audio/sbg1.mp3",
        q9 : "./audio/sbg0.mp3",
        q10 : "./audio/sbg1.mp3",
        q11 : "./audio/sbg1.mp3",
        q12 : "./audio/sbg1.mp3",
        q13 : "./audio/sbg1.mp3",
        q14 : "./audio/sbgRule.mp3",
        q15 : "./audio/sbg1.mp3",
        q16 : "./audio/sbg0.mp3",
        q17 : "./audio/sbg0.mp3",
        q18 : "./audio/sbg1.mp3",
        q19 : "./audio/sbg0.mp3",
        q20 : "./audio/sbg2.mp3"
    }
    const soundEFsrc = {
        q0 : "",
        q1 : "",
        q2 : "",
        q3 : "",
        q4 : "",
        q5 : "",
        q6 : "./audio/sef0.mp3",
        q7 : "",
        q8 : "",
        q9 : "",
        q10 : "",
        q11 : "",
        q12 : "./audio/sef3.mp3",
        q13 : "./audio/sef0.mp3",
        q14 : "./audio/scream.mp3",
        q15 : "./audio/sef0.mp3",
        q16 : "./audio/sef2.mp3",
        q17 : "",
        q18 : ["./audio/sef4.mp3","./audio/sef5.mp3"],
        q19 : "",
        q20 : ""
    }
    
    var logSceneArr = [];
    var flagGood = false;
    var flagBad = false;

    showrule();
    changeScene("q0");
    
    function transition(state, symbol){
        if (state === 'q0' && symbol === '0') return 'q1';
        if (state === 'q0' && symbol === '1') return 'q2';
        if (state === 'q1' && symbol === '0') return 'q3';
        if (state === 'q1' && symbol === '1') return 'q4';
        if (state === 'q2' && symbol === '0') return 'q1';
        if (state === 'q2' && symbol === '1') return 'q5';
        if (state === 'q3' && symbol === '0') return 'q6';
        if (state === 'q3' && symbol === '1') return 'q6';
        if (state === 'q4' && symbol === '0') return 'q6';
        if (state === 'q4' && symbol === '1') return 'q6';
        if (state === 'q5' && symbol === '0') return 'q7';
        if (state === 'q5' && symbol === '1') return 'q8';
        if (state === 'q6' && symbol === '0') return 'q10';
        if (state === 'q6' && symbol === '1') return 'q9';
        if (state === 'q7' && symbol === '0') return 'q11';
        if (state === 'q7' && symbol === '1') return 'q11';
        if (state === 'q8' && symbol === '0') return 'q14';
        if (state === 'q8' && symbol === '1') return 'q12';
        if (state === 'q9' && symbol === '0') return 'q13';
        if (state === 'q9' && symbol === '1') return 'q10';
        if (state === 'q10' && symbol === '0') return 'q14';
        if (state === 'q10' && symbol === '1') return 'q14';
        if (state === 'q11' && symbol === '0') return 'q14';
        if (state === 'q11' && symbol === '1') return 'q14';
        if (state === 'q12' && symbol === '0') return 'q14';
        if (state === 'q12' && symbol === '1') return 'q15';
        if (state === 'q13' && symbol === '0') return 'q16';
        if (state === 'q13' && symbol === '1') return 'q10';
        if (state === 'q14' && symbol === '0') return 'q14';
        if (state === 'q14' && symbol === '1') return 'q14';
        if (state === 'q15' && symbol === '0') return 'q14';
        if (state === 'q15' && symbol === '1') return 'q17';
        if (state === 'q16' && symbol === '0') return 'q14';
        if (state === 'q16' && symbol === '1') return 'q18';
        if (state === 'q17' && symbol === '0') return 'q19';
        if (state === 'q17' && symbol === '1') return 'q14';
        if (state === 'q18' && symbol === '0') return 'q20';
        if (state === 'q18' && symbol === '1') return 'q14';
        if (state === 'q19' && symbol === '0') return 'q20';
        if (state === 'q19' && symbol === '1') return 'q20';
        if (state === 'q20' && symbol === '0') return 'q20';
        if (state === 'q20' && symbol === '1') return 'q20';
    }

    function endSceneCheck(n){ //n = array 01
        let result = n.join("");
        let currentState = 'q0';
        for (let i = 0; i < result.length; i++) {
            currentState = transition(currentState, result[i]);
        }
        console.log("Array:",result,", Length:",result.length,", Current State:",currentState);
        if (currentState === 'q20') {
            console.log("Good End",currentState)
        }
        if (currentState === 'q14') {
            console.log("Bad End",currentState)
        }
        changeScene(currentState);
    }

    function changeScene(n){ // n = current state
        const quizDetail = document.getElementById("quizDetail");
        const btn0 = document.getElementById("btn0");
        const btn1 = document.getElementById("btn1");
        const flexContainer = document.getElementById("flexContainer");
        flexContainer.style.backgroundImage = "url('" +  img[n] + "')";
        quizDetail.innerHTML = quiz[n] 
        btn0.innerHTML = Btn0[n] 
        btn1.innerHTML = Btn1[n] 
        efAudio(soundEFsrc[n])
        bgAudio(soundBGsrc[n])
        document.getElementById("btnHome").style.display = "none";
        if(n=="q14" || n=="q20"){
            btn0.style.display = "none"   
            btn1.style.display = "none"
            quizDetail.style.textAlign = "center"
            document.getElementById("btnHome").style.display = "block";
        }      
        if(n=="q14"){
            jumpscareShake();
        }      

    }

    function jumpscareShake(){
        document.getElementById("flexContainer").style.animation = "shake 1s 3";
    }

    function q0(){
        logSceneArr.push(0)
        endSceneCheck(logSceneArr)
    }
    function q1(){
        logSceneArr.push(1)
        endSceneCheck(logSceneArr)     
    }
    function returnHome(){
        window.open("index.html","_self");
    }

    function showrule(){
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var txtquiz = document.getElementById("txtQuiz");
        
        function popupModal(){
            modal.style.display = "block";
            txtquiz.style.display = "none";
        }
        popupModal();
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        txtquiz.style.display = "block";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) { 
                modal.style.display = "none";
                txtquiz.style.display = "block";
            }
        }
    }
    
    var audioRule = document.getElementById("bgSound");
    
    audioRule.src = "./audio/sbgRule.mp3";
    audioRule.volume  = 0.5;

      function playAudio() {
        audioRule.play();
      }
      function pauseAudio() {
        audioRule.pause();
      }
      document.addEventListener("wheel", function () {
        audioRule.play()
    })
      document.body.addEventListener("click", function () {
        audioRule.play()
    })

    function bgAudio(n){
        let audioBg = document.getElementById("bgSound");
        audioBg.src = n;
        audioBg.volume  = 0.5;
        if (n == "./audio/sbg2.mp3"){audioBg.volume=1.0}
        console.log(n)
        audioBg.play()

    }
    

    function efAudio(n){
        let audioEf = document.getElementById("bgSoundEffect");
        let audioEf2 = document.getElementById("bgSoundEffect2");
        if(n.length == 2){
            audioEf.src = n[0];
            audioEf2.src = n[1];
            if(audioEf != ""){
                audioEf.play()
                audioEf2.play()
            }
        }
        else{
            audioEf.src = n
            if(audioEf != ""){
                audioEf.play()
            }
        }
    }

  

