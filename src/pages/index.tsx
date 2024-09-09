import React, { useState, useRef, useEffect } from 'react';
import "../app/globals.css";

const questionsData_info = [
    {
        question: 'LORD Demir_Jan\'ın main karakteri kimdir?',
        translation: 'Who is LORD Demir_Jan\'s main character?',
        options: ['Jin', 'Kazuya', 'Yoshimitsu', 'Reina'],
        translationOptions: ['Jin', 'Kazuya', 'Yoshimitsu', 'Reina'],
        correctAnswer: 'Kazuya',
        value: 5
    },
    {
        question: 'Standart bir LORD Demir_Jan Kazuya kostümünde, aşağıdaki item\'lardan hangisini görmeniz, diğerlerine nazaran daha muhtemeldir?',
        translation: 'In a standard LORD Demir_Jan Kazuya outfit, which of the following items is more likely to be seen than the others?',
        options: ['Red aura (kırmızı ışık efekti)', 'Kundura', 'Bıçak', 'Saat'],
        translationOptions: ['Red aura', 'Kundura (Turkish style black shoe)', 'Knife', 'Wristwatch'],
        correctAnswer: 'Kundura',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, bazı avrupalı yayıncılar tarafından aşağıdaki konulardan hangisiyle hiçbir zaman yargılanmamıştır?',
        translation: 'In which of the following topics, LORD DemirJan has never been blamed by some European streamers?',
        options: ['Save almak', 'Macro kullanmak', 'İnternet bağlantı problemleri', 'Basit oyun tarzı'],
        translationOptions: ['Save scumming', 'Using macros', 'Internet connection problems', 'Unga bunga playstyle'],
        correctAnswer: 'Save almak',
        value: 5
    },
    {
        question: 'Aşağıdakilerden hangisi LORD Demir_Jan\'ın oynadığı karakterlerden biri değildir?',
        translation: 'Which of the following is not one of the characters LORD Demir_Jan plays?',
        options: ['Armor King', 'Lei', 'Paul', 'Hwoarang'],
        translationOptions: ['Armor King', 'Lei', 'Paul', 'Hwoarang'],
        correctAnswer: 'Armor King',
        value: 5
    },
    {
        question: 'Yayınsız yaptığı ranklar sebebiyle LORD Demir_Jan tarafından sık sık şakayla karışık sorgulanan, her yıl 18 kere drama yaşanmasına konu olan izleyici kimdir?',
        translation: 'Who is the viewer who is often jokingly interrogated by LORD Demir_Jan due to the ranks he achieved without streaming?',
        options: ['Kicking Machine', 'RavenHaze', 'BIGB0SS', 'crystalcastlesss'],
        translationOptions: ['Kicking Machine', 'RavenHaze', 'BIGB0SS', 'crystalcastlesss'],
        correctAnswer: 'RavenHaze',
        value: 5
    },
    {
        question: 'Aşağıdakilerden hangisi, LORD Demir_Jan\'ın haz etmediği oyuncular arasında yer almaz?',
        translation: 'Which of the following is not among the players LORD Demir_Jan dislikes?',
        options: ['PlantedMedusa', 'TheMainManSWE', 'Super Akouma', 'Arslan Ash'],
        translationOptions: ['PlantedMedusa', 'TheMainManSWE', 'Super Akouma', 'Arslan Ash'],
        correctAnswer: 'Super Akouma',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, aşağıdaki oyunculardan hangisinin arkadaşlık isteğini hala kabul etmemiştir?',
        translation: 'Which of the following players has LORD Demir_Jan still not accepted the friend request?',
        options: ['Hexmark', 'PhiDx', 'DanielMado', 'DougFromParis'],
        translationOptions: ['Hexmark', 'PhiDx', 'DanielMado', 'DougFromParis'],
        correctAnswer: 'DougFromParis',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'a göre, Bryan\'da dünyada 1 numara kimdir?',
        translation: 'According to LORD Demir_Jan, who is the number 1 Bryan in the world?',
        options: ['JimmyJTran', 'Knee', 'Multi', 'Starbreaker'],
        translationOptions: ['JimmyJTran', 'Knee', 'Multi', 'Starbreaker'],
        correctAnswer: 'Multi',
        value: 5
    },
    {
        question: 'Aşağıdakilerden hangisi, LORD Demir_Jan yasalarına göre, bir rankın legit sayılmasının koşullarından biri değildir?',
        translation: 'Which of the following is not one of the conditions for a rank to be considered legit according to LORD Demir_Jan laws?',
        options: ['Kimseden kaçmadan yapılması', 'YAYINDA yapılması', 'Maçların kötü bağlantıda oynanması', 'Kazuya ile yapılması'],
        translationOptions: ['Without dodging anyone', 'Being done on stream', 'Playing matches with bad connection', 'Using Kazuya'],
        correctAnswer: 'Maçların kötü bağlantıda oynanması',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, K.O\'ya bir hit kaldıysa; rakibe sertlik dersi vermek istediği zaman komboları hangi hareketle bitirir?',
        translation: 'If LORD Demir_Jan has one hit left for K.O; when he wants to flex to the opponent, with which move does he end the combos?',
        options: ['EWGF', 'Stomp (d3+4)', 'WS2', 'Unblockable (b1+4)'],
        translationOptions: ['EWGF', 'Stomp (d3+4)', 'WS2', 'Unblockable (b1+4)'],
        correctAnswer: 'WS2',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın sık sık problem yaşadığı, yayınlarda genelde sevilmeyen hatta nefret seviyesine dahi ulaşan izleyici grubu aşağıdakilerden hangisidir?',
        translation: 'Which of the following viewer groups, which LORD Demir_Jan often has problems with, is generally not liked in broadcasts and even hated?',
        options: ['Belli bir futbol takımı taraftarları', 'Türk olmayanlar', 'Gurbetçiler (ferat gibiler hariç)', 'Belli bir siyasi parti grubu'],
        translationOptions: ['Fans of a certain football team', 'Non-Turkish people', 'Expatriates (except people like ferat)', 'Fans of a certain political party'],
        correctAnswer: 'Gurbetçiler (ferat gibiler hariç)',
        value: 5
    },
    // ez done
    {
        question: 'LORD Demir_Jan\'ın TEKKEN 7\'deki signature combosu kaç damage almaktadır?',
        translation: 'How much damage does LORD Demir_Jan\'s signature combo do in TEKKEN 7?',
        options: ['107', '121', '137', '140'],
        translationOptions: ['107', '121', '137', '140'],
        correctAnswer: '137',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın yayınlarında kullandığı playlistinde çalan bir parçada sürekli meydana gelen problem aşağıdakilerden hangisidir?',
        translation: 'Which of the following is a constant problem in a song played in LORD Demir_Jan\'s playlist?',
        options: ['Twitch tarafından copyright\'a takılması', "Şarkının playlisti bozup yeniden ayar gerektirmesi", "Şarkının sesinin diğer parçalara göre bariz yüksek çıkması", "Şarkı bitince 5 dakika boyunca başka şarkı çalamaması"],
        translationOptions: ['Getting copyright claimed by Twitch', 'Breaking the playlist and requiring re-adjustment', 'The song\'s volume being significantly higher than other tracks', 'Not being able to play another song for 5 minutes after the song ends'],
        correctAnswer: 'Şarkının sesinin diğer parçalara göre bariz yüksek çıkması',
        value: 5
    },
    {
        question: 'Yakın zamanda LORD Demir_Jan ile oynayıp, kaybettikten sonra bunu hazmedemeyip LORD Demir_Jan\'ı bloklayan, ardından kameraya el sallayan ünlü yayıncı kimdir?',
        translation: 'Who is the famous streamer who recently played with LORD Demir_Jan, lost, couldn\'t digest it, blocked LORD Demir_Jan, and then waved at the camera?',
        options: ['PlantedMedusa', 'TheMainManSWE', 'savvvy', 'J.F.K'],
        translationOptions: ['PlantedMedusa', 'TheMainManSWE', 'savvvy', 'J.F.K'],
        correctAnswer: 'PlantedMedusa',
        value: 5
    },
    {
        question: 'LORD Demir_Jan yasalarına göre, bir rage art\'ı kabul edilebilir kılan gerekli şart nedir?',
        translation: 'According to LORD Demir_Jan laws, what is the necessary condition that makes a rage art acceptable?',
        options: ['Kombo içinde yapılması', 'Tek tuşa atanmadan yapılması', 'Sadece K.O olacak iken yapılması', 'Baskıdan kurtulmak için yapılması'],
        translationOptions: ['Being done in a combo', 'Not being done by binding', 'Being done only when it will be K.O', 'Being done to get out of pressure'],
        correctAnswer: 'Kombo içinde yapılması',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın TEKKEN 8\'e gelmesini en çok istediği DLC karakter hangisidir?',
        translation: 'Which DLC character does LORD Demir_Jan want the most in TEKKEN 8?',
        options: ['Jinpachi', 'Baek', 'Ogre', 'Bruce'],
        translationOptions: ['Jinpachi', 'Baek', 'Ogre', 'Bruce'],
        correctAnswer: 'Bruce',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, bir maçta yenildiği zaman bir gerekçe bulmak isterse, "SON KALE" olarak aşağıdakilerden hangisini kullanır?',
        translation: 'If LORD Demir_Jan wants to find an excuse when he loses a match, which of the following does he use as last resort?',
        options: ['"Onlar bu bağlantıda oynasın da görelim"', '"Onlar Kazuya ile oynasın da görelim"', '"Onlar 40 yaşına gelsin de görelim"', '"Onlar stick ile oynasın da görelim"'],
        translationOptions: ['"Let them play on this connection and see"', '"Let them play with Kazuya and see"', '"Let them reach 40 and see"', '"Let them play with stick and see"'],
        correctAnswer: '"Onlar 40 yaşına gelsin de görelim"',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, aşağıdaki oyuncuların hangisinden illegal cihaz kullanması konusunda şüphelenmemiştir?',
        translation: 'Which of the following players has LORD Demir_Jan not suspected of using illegal devices?',
        options: ['crystalcastlesss', 'Perfect_God_Fist', 'BigNose', 'savvvy'],
        translationOptions: ['crystalcastlesss', 'Perfect_God_Fist', 'BigNose', 'savvvy'],
        correctAnswer: 'Perfect_God_Fist',
        value: 5
    },
    // med done

    {
        question: 'LORD Demir_Jan\'ın doğum günü, hangi özel güne denk gelmektedir?',
        translation: 'On which special day does LORD Demir_Jan\'s birthday fall?',
        options: ["Ramazan bayramı", "Kurban bayramı", "Yılbaşı", "Şükran günü"],
        translationOptions: ['Eid al-Fitr', 'Eid al-Adha', 'New Year\'s Day', 'Thanksgiving'],
        correctAnswer: 'Yılbaşı',
        value: 5
    },

    {
        question: 'LORD Demir_Jan\'ın, TheMainMan\'e izleyicileri önünde attığı efsane parry, hangi stage\'de atılmıştır?',
        translation: 'LORD Demir_Jan\'s legendary parry against TheMainMan was performed on which stage?',
        options: ['Kinder Gym', 'Mishima Dojo', 'Jungle Outpost', 'Geometric Plane'],
        translationOptions: ['Kinder Gym', 'Mishima Dojo', 'Jungle Outpost', 'Geometric Plane'],
        correctAnswer: 'Mishima Dojo',
        value: 5
    },

    {
        question: 'LORD Demir_Jan TEKKEN 7\'de ilk OMEGA\'sını alırken en çok dinlediği, hatta izleyiciler tarafından "omega şarkısı" olarak bilinen parça hangisidir?',
        translation: 'What is the song LORD Demir_Jan listened to the most while taking his first OMEGA in TEKKEN 7, even known as "the omega song" by viewers?',
        options: ['Traffic', 'Baytar', 'WHAT THE FUCK ALMANYA!', 'Mortal Kombat theme'],
        translationOptions: ['Traffic', 'Baytar', 'WHAT THE FUCK ALMANYA!', 'Mortal Kombat theme'],
        correctAnswer: 'Traffic',
        value: 5
    },

    {
        question: 'Aşağıdaki oyunculardan hangisi, LORD Demir_Jan\'ın evine gidip stiğini kavrama şerefine nail olmuştur?',
        translation: 'Which of the following players had the honor of going to LORD Demir_Jan\'s house and grasping his stick?',
        options: ['UTQ', 'LoCo', 'atuwunn', 'musicianofall'],
        translationOptions: ['UTQ', 'LoCo', 'atuwunn', 'musicianofall'],
        correctAnswer: 'atuwunn',
        value: 5
    },

    {
        question: 'LORD Demir_Jan\'ı obsesif takıntı haline getiren, kendisiyle sürekli uğraşan hatta fotoğrafından emoji ve Steam profil resmi yapan izleyicinin adı nedir?',
        translation: 'Who is the viewer who obsessively obsesses over LORD Demir_Jan, constantly messed with him and even made emojis and Steam profile pictures from his photo?',
        options: ['Exiiszt', 'BigNose', 'izzetJu', 'Kenoq'],
        translationOptions: ['Exiiszt', 'BigNose', 'izzetJu', 'Kenoq'],
        correctAnswer: 'Exiiszt',
        value: 5
    },

    {
        question: 'Aşağıdaki oyunculardan hangisi, LORD Demir_Jan tarafından sünnet edilmemiştir?',
        translation: 'Which of the following players has not been circumcised by LORD Demir_Jan?',
        options: ['PlantedMedusa', 'Exiiszt', 'RavenHaze', 'crystalcastlesss'],
        translationOptions: ['PlantedMedusa', 'Exiiszt', 'RavenHaze', 'crystalcastlesss'],
        correctAnswer: 'RavenHaze',
        value: 5
    },

    {
        question: 'LORD Demir_Jan chat\'ine bir zamanlar sık sık uğrayan, PS kafe işleten ve garip mesajlarıyla chat\'teki kişilere oyunlarını kakalamaya çalışan izleyici kimdir?',
        translation: 'Who is the guy that hanging in LORD Demir_Jan streams with weird messages, and tries to sell his games from PS cafe to people in chat?',
        options: ['king_kazuya', 'HellsweepMaster', 'divvvvvv', 'poory'],
        translationOptions: ['king_kazuya', 'HellsweepMaster', 'divvvvvv', 'poory'],
        correctAnswer: 'poory',
        value: 5
    },
    {
        question: 'TheMainMan\'in LORD Demir_Jan\'a karşı oynayıp YouTube\'a koyduğu, binlerce kez izlenen bu sette LORD Demir_Jan hangi karakteri kullanmıştır?',
        translation: 'In this set that TheMainMan played against LORD Demir_Jan and put on YouTube, which character did LORD Demir_Jan use?',
        options: ['Yoshimitsu', 'Kazuya', 'Feng', 'Heihachi'],
        translationOptions: ['Yoshimitsu', 'Kazuya', 'Feng', 'Heihachi'],
        correctAnswer: 'Feng',
        value: 5
    },

    // upper-med done
    {
        question: 'Aşağıdaki ülkelerden hangisi, LORD Demir_Jan\'ın bağlantı sorunları nedeniyle oynamak istemediği ülkeler arasında yer almaz?',
        translation: 'Which of the following countries is not among the countries LORD Demir_Jan does not want to play due to connection problems?',
        options: ['İtalya', 'Fransa', 'Rusya', 'İspanya'],
        translationOptions: ['Italy', 'France', 'Russia', 'Spain'],
        correctAnswer: 'Fransa',
        value: 5
    },
    {
        question: 'Zamanında LORD Demir_Jan\'ın da içinde yer aldığı, Yunanistan\'a karşı yapılan 5v5 sette, Türkiye\'yi temsil eden takımdan kaç kişi Ankara\'da ikamet ediyordu?',
        translation: 'In the 5v5 set against Greece, in which LORD Demir_Jan was also involved, how many people from the team representing Turkey resided in Ankara?',
        options: ['2', '3', '4', '5'],
        translationOptions: ['2', '3', '4', '5'],
        correctAnswer: '4',
        value: 5
    },
    {
        question: 'Bir zamanlar chat\'e gelip LORD Demir_Jan\'a platonik aşkını ilan eden oyuncu ve yayıncının adı nedir?',
        translation: 'What is the name of the player and streamer who once came to chat and declared his platonic love to LORD Demir_Jan?',
        options: ['sophia', 'emily', 'silvia', 'sarah'],
        translationOptions: ['sophia', 'emily', 'silvia', 'sarah'],
        correctAnswer: 'sarah',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın yayın sırasında verdiği aralar, izleyici kitlesinde nasıl adlandırılır?',
        translation: 'How are the breaks LORD Demir_Jan gives during the stream called in the viewer community?',
        options: ['Devre arası', 'Perde arası', 'Pasaj', 'İhtiyaç molası'],
        translationOptions: ['Half time', 'Intermission', 'Passage', 'Need break'],
        correctAnswer: 'Perde arası',
        value: 5
    },
    {
        question: 'Aşağıdaki isimlerden hangisi, LORD Demir_Jan\'ın Ankara team\'deki agalarından birisine ait değildir?',
        translation: 'Which of the following names does not belong to one of the OG friends of LORD Demir_Jan in the Ankara team?',
        options: ['Koray', 'Barış', 'Murat', 'Serkan'],
        translationOptions: ['Koray', 'Barış', 'Murat', 'Serkan'],
        correctAnswer: 'Murat',
        value: 5
    },
    {
        question: 'TEKKEN 7\'de Exiiszt, LORD Demir_Jan\'ı Jack alıp hangi stagede araba hareketi ile ezmiştir?',
        translation: 'In TEKKEN 7, Exiiszt took LORD Demir_Jan with Jack and crushed him with a car movement on which stage?',
        options: ['Howard Estate', 'Jungle Outpost', 'Forgotten Realm', 'Violet Systems'],
        translationOptions: ['Howard Estate', 'Jungle Outpost', 'Forgotten Realm', 'Violet Systems'],
        correctAnswer: 'Howard Estate',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, TEKKEN 7\'de Heihachi ile OMEGA\'sını hangi karaktere karşı almıştır?',
        translation: 'In TEKKEN 7, against which character did LORD Demir_Jan take his OMEGA with Heihachi?',
        options: ['Yoshimitsu', 'Feng', 'Ganryu', 'Lee'],
        translationOptions: ['Yoshimitsu', 'Feng', 'Ganryu', 'Lee'],
        correctAnswer: 'Ganryu',
        value: 5
    },

    // hard done
    {
        question: 'Zamanında LORD Demir_Jan\'ın da içinde yer aldığı, Yunanistan\'a karşı yapılan 5v5 sette, LORD Demir_Jan kaç maç kazanmıştır?',
        translation: 'In the 5v5 set against Greece, in which LORD Demir_Jan was also involved, how many matches did LORD Demir_Jan win?',
        options: ['0', '1', '2', '3'],
        translationOptions: ['0', '1', '2', '3'],
        correctAnswer: '2',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın tarihe geçen 5 saniyede aldığı round\'da, kaç deathfist, kaç demo-man vurulmuştur?',
        translation: 'In the legendary round that LORD Demir_Jan took only in the 5 seconds, how many deathfists and how many demo-mans were hit?',
        options: ['2 Deathfist, 1 Demo-man', '1 Deathfist, 2 Demo-man', '2 Deathfist, 2 Demo-man', '3 Deathfist, 0 Demo-man'],
        translationOptions: ['2 Deathfist, 1 Demo-man', '1 Deathfist, 2 Demo-man', '2 Deathfist, 2 Demo-man', '3 Deathfist, 0 Demo-man'],
        correctAnswer: '2 Deathfist, 1 Demo-man',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın kaç tane stiği vardır?',
        translation: 'How many sticks does LORD Demir_Jan have?',
        options: ['2', '6', '8', '13'],
        translationOptions: ['2', '6', '8', '13'],
        correctAnswer: '8',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'a bugüne kadarki en büyük RAID/BASKIN kimden gelmiştir?',
        translation: 'Who has made the biggest raid on LORD Demir_Jan\'s channel to date?',
        options: ['Exiiszt', 'BigNose', 'PlantedMedusa', 'federer2009'],
        translationOptions: ['Exiiszt', 'BigNose', 'PlantedMedusa', 'federer2009'],
        correctAnswer: 'PlantedMedusa',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, Kazuya ile OMEGA\'yı aldığı round\'da, K.O vuruşunu hangi hareket ile yapmıştır?',
        translation: 'In the round that LORD Demir_Jan took OMEGA with Kazuya, with which move did he make the K.O hit?',
        options: ['Rage drive', 'Rage art', 'd4', '4~3'],
        translationOptions: ['Rage drive', 'Rage art', 'd4', '4~3'],
        correctAnswer: 'Rage drive',
        value: 5
    },
    {
        question: 'LORD Demir_Jan\'ın eski nickinde bulunan /// sembolleri, neyi temsil etmektedir?',
        translation: 'What do the /// symbols in LORD Demir_Jan\'s old nickname represent?',
        options: ['Kazuya\'nın eski bir hareketinin sembolü', "BMW logosu", "Adidas logosu", "Oynadığı stick markası logosu"],
        translationOptions: ['Symbol for an old move of Kazuya', "BMW logo", "Adidas logo", "Logo of the stick brand he plays with"],
        correctAnswer: 'BMW logosu',
        value: 5
    },
    {
        question: 'LORD Demir_Jan, aylarca "TEKKEN 8\'i muhtemelen oynamam" dedikten sonra, oyunun çıktığı gece saat kaça kadar TEKKEN 8 yayını yapmıştır?',
        translation: 'After saying "I won\'t play TEKKEN 8" for months, until what time did LORD Demir_Jan streamed TEKKEN 8, on the night the game was released?',
        options: ['03:42', '04:49', '05:25', '06:33'],
        translationOptions: ['3:42AM', '4:49AM', '5:25AM', '6:33AM'],
        correctAnswer: '06:33',
        value: 5
    },

    // ultra hard done

];

const questionSoundChangeIndexes = [8, 11, 15, 19, 23, 27, 31, 35, 38, questionsData_info.length - 2]


const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [lockedAnswer, setLockedAnswer] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [indicateWinner, setIndicateWinner] = useState(false);
    const [questionsData, setQuestionsData] = useState(questionsData_info);
    const [availableJokers, setAvailableJokers] = useState(5);
    const [youWon, setYouWon] = useState(false);
    const [youLost, setYouLost] = useState(false);
    const soundRef = useRef<HTMLAudioElement | null>(null);
    const [isEnglish, setIsEnglish] = useState(true);

    let startTime: any = null;

    let audio: any = null; // reading question
    let audio_2: any = null; // option selected 
    let audio_3: any = null; // correct answer
    let audio_4: any = null; // passage

    useEffect(() => {
        startTime = performance.now();
    }, [currentQuestionIndex])


    const useJoker = () => {

        if (lockedAnswer !== "") return;

        // if any of the answers is equal to empty string, return
        if (availableJokers < 1) {
            return;
        }

        if (!isEnglish) {
            if (questionsData[currentQuestionIndex].options.includes("")) return;
        } else {
            if (questionsData[currentQuestionIndex].translationOptions.includes("")) return;
        }

        const soundFile = "./sounds/50.mp3"
        const audio_50 = new Audio(soundFile);
        audio_50.play();

        // hide 2 wrong answers
        let correctAnswer = questionsData[currentQuestionIndex].correctAnswer;

        if (isEnglish) {
            /* find index of correct answer and then find the english translation of the correct answer */
            const correctAnswerIndex = questionsData[currentQuestionIndex].options.indexOf(correctAnswer);
            correctAnswer = questionsData[currentQuestionIndex].translationOptions[correctAnswerIndex];
        }

        let options = questionsData[currentQuestionIndex].options;

        if (isEnglish) {
            options = questionsData[currentQuestionIndex].translationOptions;
        }

        const wrongAnswers = options.filter(option => option !== correctAnswer);
        const twoRandomWrogAnswers = wrongAnswers.sort(() => Math.random() - 0.5).slice(0, 2);

        const newOptions = options.map(option => {
            if (twoRandomWrogAnswers.includes(option)) {
                return ""
            } else {
                return option
            }
        })

        if (!isEnglish) {
            setQuestionsData(prev => {
                const newQuestionsData = [...prev];
                newQuestionsData[currentQuestionIndex].options = newOptions;
                return newQuestionsData;
            })
        } else {
            setQuestionsData(prev => {
                const newQuestionsData = [...prev];
                newQuestionsData[currentQuestionIndex].translationOptions = newOptions;
                return newQuestionsData;
            })
        }

        setAvailableJokers(availableJokers - 1);

    }

    const getQuestionSoundName = () => {
        if (currentQuestionIndex < 8) {
            return 1
        } else if (currentQuestionIndex < 11) {
            return 2
        } else if (currentQuestionIndex < 15) {
            return 3
        } else if (currentQuestionIndex < 19) {
            return 4
        } else if (currentQuestionIndex < 23) {
            return 5
        } else if (currentQuestionIndex < 27) {
            return 6
        } else if (currentQuestionIndex < 31) {
            return 7
        } else if (currentQuestionIndex < 35) {
            return 8
        } else if (currentQuestionIndex < 38) {
            return 9
        } else if (currentQuestionIndex < questionsData.length - 2) {
            return 10
        } else if (currentQuestionIndex === questionsData.length - 2) { // final
            return 11
        }

    }

    const getFinalAnswerSoundName = () => {
        if (currentQuestionIndex < 8) {
            return 1
        } else if (currentQuestionIndex < 11) {
            return 2
        } else if (currentQuestionIndex < 15) {
            return 3
        } else if (currentQuestionIndex < 20) {
            return 4
        } else if (currentQuestionIndex < 24) {
            return 5
        } else if (currentQuestionIndex < 28) {
            return 6
        } else if (currentQuestionIndex < 33) {
            return 7
        } else if (currentQuestionIndex < 38) {
            return 8
        } else if (currentQuestionIndex < questionsData.length - 2) {
            return 9
        } else if (currentQuestionIndex === questionsData.length - 2) { // final
            return 10
        } else {
            return 10
        }
    }

    const getWaitTime = (timeTaken: number) => {

        if (currentQuestionIndex > 37) {
            return 20000
        }

        if (currentQuestionIndex === 0) return 2400;

        if (timeTaken < 7000) {
            return 2400
        } else if (timeTaken < 15000) {
            return 4500
        } else if (timeTaken < 36000) {
            return 9000
        } else if (timeTaken < 60000) {
            return 15000
        } else {
            return 20000
        }
    }

    const handleAnswer = (selectedAnswer: string) => {

        const endTime = performance.now();
        const timeTaken = endTime - startTime;

        let correntAnswer = questionsData[currentQuestionIndex].correctAnswer;
        setLockedAnswer(selectedAnswer);

        if (soundRef.current) {
            soundRef.current.volume = 0.1;
        }

        const soundFile = "./sounds/final-answer/" + getFinalAnswerSoundName() + ".mp3"
        audio_2 = new Audio(soundFile);
        audio_2.play();

        setTimeout(() => {
            if (selectedAnswer === correntAnswer) {

                setIndicateWinner(true);
                audio_2.pause()
                let soundFile = "./sounds/win/2.mp3"
                if (currentQuestionIndex > 36) {
                    soundFile = "./sounds/win/10.mp3"
                }
                if (currentQuestionIndex === questionsData.length - 1) {
                    soundFile = "./sounds/win/11.mp3"
                    setYouWon(true);
                }

                audio_3 = new Audio(soundFile);
                audio_3.play();

                if (currentQuestionIndex === questionsData.length - 1) {

                    // loop the song when it ends 
                    audio_3.addEventListener("ended", () => {
                        audio_3.play();
                    })
                }

                // after 3400 miliseconds, slowly decrease the volume to 0 in 1 second, with using setInterval

                if (currentQuestionIndex !== questionsData.length - 1) {
                    setTimeout(() => {
                        let volume = 1;
                        const interval = setInterval(() => {
                            if (volume <= 0) {
                                clearInterval(interval);
                            } else {
                                volume -= 0.12;
                                if (volume > 0) audio_3.volume = volume;
                                else (audio_3.volume = 0);
                            }
                        }, 130)
                    }, 3500)
                }


                setTimeout(() => {

                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setLockedAnswer("");
                    setIndicateWinner(false);

                    if (soundRef.current) {
                        if (currentQuestionIndex < questionsData.length - 1) soundRef.current.volume = 1;
                        else soundRef.current.volume = 0;
                    }

                    if (questionSoundChangeIndexes.includes(currentQuestionIndex)) {

                        // setting new question song 
                        soundRef?.current?.pause();
                        const soundFile = "./sounds/question/" + getQuestionSoundName() + ".mp3"
                        audio = new Audio(soundFile);
                        audio.addEventListener("ended", () => {
                            audio.play();
                        })
                        soundRef.current = audio;
                        audio.play();
                        // setting new question song end
                    }
                }, 4400)

            } else {
                audio_2.pause()
                const soundFile = "./sounds/win/lose.mp3"
                audio = new Audio(soundFile);
                audio.play();
                setYouLost(true);
            }

        }, getWaitTime(timeTaken))
    }

    return (
        <div className="game-wrapper">

            {!gameStarted && !youWon && !youLost &&
                <button onClick={() => {
                    setGameStarted(true);
                    const soundFile = "./sounds/question/" + getQuestionSoundName() + ".mp3"
                    audio = new Audio(soundFile);
                    audio.addEventListener("ended", () => {
                        // loop again
                        audio.play();
                    })
                    soundRef.current = audio;
                    audio.play();
                }}>

                    {!isEnglish && <div>Oyuna başla!</div>}
                    {isEnglish && <div>Start the game!</div>}

                </button>
            }

            {gameStarted && !youWon && !youLost &&
                <div>
                    <div className="info-wrapper">
                        {currentQuestionIndex < questionsData.length &&
                            <div className="info-line">

                                {!isEnglish && <span>Soru: </span>}
                                {isEnglish && <span>Question: </span>}

                                <span>{currentQuestionIndex + 1}</span>/{questionsData.length}
                            </div>
                        }
                        -
                        {currentQuestionIndex < questionsData.length &&
                            <div className="info-line">
                                <span className="cursor-pointer" onClick={useJoker}>
                                    {!isEnglish && <span>50:50 Joker kullan</span>} {isEnglish && <span>Use 50:50 Joker</span>} (x{availableJokers})</span>
                            </div>
                        }
                    </div>

                    <div className="template-wrapper">
                        {currentQuestionIndex < questionsData.length &&
                            <img className="question-template" src="./question-template.png"></img>
                        }
                        {currentQuestionIndex < questionsData.length &&
                            <div className={`question-wrapper ${lockedAnswer !== "" && "not-allowed"} ${indicateWinner && "indicate-winner"}`}>

                                <div className="question">
                                    {!isEnglish && questionsData[currentQuestionIndex].question}
                                    {isEnglish && questionsData[currentQuestionIndex].translation}
                                </div>

                                {!isEnglish &&
                                    <>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[0] ? "locked" : ""} option option-a`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[0])}>{questionsData[currentQuestionIndex].options[0]}</div>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[1] ? "locked" : ""} option option-b`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[1])}>{questionsData[currentQuestionIndex].options[1]}</div>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[2] ? "locked" : ""} option option-c`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[2])}>{questionsData[currentQuestionIndex].options[2]}</div>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[3] ? "locked" : ""} option option-d`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[3])}>{questionsData[currentQuestionIndex].options[3]}</div>
                                    </>
                                }

                                {isEnglish &&

                                    <>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[0] ? "locked" : ""} option option-a`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[0])}>{questionsData[currentQuestionIndex].translationOptions[0]}</div>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[1] ? "locked" : ""} option option-b`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[1])}>{questionsData[currentQuestionIndex].translationOptions[1]}</div>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[2] ? "locked" : ""} option option-c`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[2])}>{questionsData[currentQuestionIndex].translationOptions[2]}</div>
                                        <div className={`${lockedAnswer === questionsData[currentQuestionIndex].options[3] ? "locked" : ""} option option-d`} onClick={() => handleAnswer(questionsData[currentQuestionIndex].options[3])}>{questionsData[currentQuestionIndex].translationOptions[3]}</div>
                                    </>

                                }

                            </div>
                        }

                    </div>

                </div>
            }

            {youWon &&
                <div className='you-won'>
                    <img className="pp" src="./pp.png"></img>
                    <h1 className="text-white text-3xl">
                        {!isEnglish && <div>tbr kazandiniz</div>}
                        {isEnglish && <div>congrats u have won</div>}
                    </h1>
                </div>
            }
            {youLost &&
                <div className='you-won'>
                    <h1 className="text-white text-3xl">YOU LOST</h1>
                    <button className="play-again" onClick={() => {
                        window.location.reload();
                    }}>
                        {isEnglish && <div>[try again]</div>}
                        {!isEnglish && <div>[tkrr dne]</div>}
                    </button>
                </div>
            }
        </div>
    );
};

export default QuizPage;
