
Add_Event_Listener();

function Add_Event_Listener() {
    document.getElementById('Evaluation_diagnostique_a').addEventListener("click", Display_Evaluation_Diagnostic);
    document.getElementById('Cours_a').addEventListener("click", Display_Cours);
    document.getElementById('Exercices_a').addEventListener("click", Display_Exercices);
    document.getElementById('Evaluation_formative_a').addEventListener("click", Display_Evaluation_formative);
    document.getElementById('Projet_a').addEventListener("click", Display_Projet);
}

function Hide_all(){

    document.getElementById('Evaluation_diagnostique').style.display = 'none';
    document.getElementById('Cours').style.display = 'none';
    document.getElementById('Exercices').style.display = 'none';
    document.getElementById('Evaluation_formative').style.display = 'none';
    document.getElementById('Projet').style.display = 'none';
}


//EVALUATION DIAGNOSTIQUE - FONCTIONS

function Display_Evaluation_Diagnostic() {
    event.preventDefault();
    console.log('Evaluation');

    let content =
`
<!-- NOTION DE FONCTION -->
                            <div class="col-12" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="2000">
                                <h2 class="pt-5 pb-5">La notion de probabilité et de proportionnalité</h2>
                                <p class="text-justify">Avant de cpommencer ce chapitre, il est essentiel d'avoir acquis les notions de base concernant la proportionnalité et le produit en croix. Une évaluation diagnostique est mise en place sous forme de quizz en classe.</p>
                                <p class="text-justify">Afin de pouvoir suivre ce cours au mieux, il est essentiel d'avoir acquis les notions suivantes. Une remédiation sera mise en place dans le cas contraire :</p>
                                <ol>
                                    <li>La notion de proportionnalité</li>
                                    <li>La notion de fraction</li>
                                    <li>Le calcul du produit en croix</li>
                                </ol>
                            </div>
`
    Hide_all();
    document.getElementById('Evaluation_diagnostique').style.display = 'flex';
    document.getElementById('Evaluation_diagnostique').innerHTML = content;
}

//COURS - FONCTIONS

function Display_Cours() {
    event.preventDefault();
    console.log('cours');
    let content =
        `
<!-- NOTION DE FONCTION -->
                            <div class="col-12 cours" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="2000">
                                <h2 class="pt-5 pb-5 black">Les probabilités</h2>
                                <p class="text-justify">Ce cours nous permettra d'approfondir les notions de calculs de probabilité abordés en troisième. Cette étude s'appuiera sur des cas concrêts et qui nous permettront également d'aborder la notion de probabilité conditionnelle.</p>
                                <p class="text-justify">Les compétences travaillées dans cette partie du cours sont :</p>
                                <ol>
                                    <li>L'exploitation des informations dans le cadre du calcul de probabilité</li>
                                    <li>La communication des résultats et des informations relatives à la résolution d'un problème probabiliste.</li>
                                    <li>Le calcul de probabilités conditionnelles.</li>
                                </ol>

<div class="part_cours mt-5">
                                <!-- PREMIERE PARTIE - La fonction affine -->
                                <h2 class="pt-5">Calculs de probabilité</h2>
                                <h3 class="pt-5">Téléchargez le powerpoint utilisé en cours ci dessous</h3>
                                <div class="row pt-5 pb-5">
                                    <div class="col-md-6" id="Arrow_right">
                                        <img src="../../IMAGES/TEACHING/Arrow_right.png" alt="Here Evaluation"/>
                                    </div>
                                    <div class="Evaluation_File col-md-6 m-auto">
                                        <a href="../../PROBABILITES/Evaluation_Fonctions_graph.pdf" download="Cours - Les fonctions usuelles"><p>Télécharger le diaporama : <img src="../../IMAGES/TEACHING/Download.png" alt="Evaluation Diagnostique" /></p></a>
                                    </div>

                                    <div class="col-12 blanc">
                                        <h3>Les notions clés</h3>
                                        <p>Les notions clées abordées dans ce chapitre</p>
                                    </div>
                                </div>
                            </div>`
    Hide_all();
    document.getElementById('Cours').style.display = 'flex';
    document.getElementById('Cours').innerHTML = content;
}

//EXERCICES - FUNCTION

function Display_Exercices() {
    event.preventDefault();
    console.log('Exercices');
    let content =
        `
<!-- NOTION DE FONCTION -->
                            <div class="col-12" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="2000">
                                <h2 class="pt-5">Les exercices pour vous permettre de monter en compétence</h2>
                                <p class="text-justify">Un document présente une série d'exercices intéressants pour une montée en compétence dans le domaine des calculs de probabilité.</p>
                                <p class="text-justify">Les exercices "facultatifs" sont à faire sur la base du volontariat et à rendre directement au professeur pour correction.</p>
                                <p class="text-justify">Les exercices "Avancés" sont à faire sur la base du volontariat également et permettent d'explorer plus avant les notions mathématiques abordées.</p>
                   

                                <!-- PREMIERE PARTIE - La fonction affine -->
                                <h3 class="pt-5 pb-5">Les exercices</h3>
                                <div class="row pt-5 pb-5">
                                    <div class="col-md-6" id="Arrow_right">
                                        <img src="../../IMAGES/TEACHING/Arrow_right.png" alt="Here Evaluation"/>
                                    </div>
                                    <div class="Evaluation_File col-md-6 m-auto">
                                        <a href="Evaluation_Fonctions_graph.pdf" download="Exercices - Les probabilités"><p>Télécharger les exercices : <img src="../../IMAGES/TEACHING/Download.png" alt="Evaluation Diagnostique" /></p></a>
                                    </div>
                                </div>
                            </div>
`
    Hide_all();
    document.getElementById('Exercices').style.display = 'flex';
    document.getElementById('Exercices').innerHTML = content;
}

//EVALUATION FORMATIVE - FUNCTION

function Display_Evaluation_formative() {
    event.preventDefault();
    console.log('Evaluation_formative');
    let content =
        `
<!-- NOTION DE FONCTION -->
                            <div class="col-12" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="2000">
                                <h2 class="pt-5 pb-5">Evaluation</h2>
                                <p class="text-justify">Cette évaluation formative nous permet d'évaluer le degré d'acquisition des notions et des compétences abordées dans ce chapitre. Une eventuelle remediation pourra vous être proposée si certaines notions sont toujours en cours d'acquisition.</p>
                                <p class="text-justify">Vous trouverez ci dessous, pour rappel, la grille d'évaluation capacitaire pour cette évaluation.</p>
                                <a href="Evaluation_Fonctions_graph.pdf" download="Eval - Les fonctions"><p>Télécharger la grille : <img src="../../IMAGES/TEACHING/Download.png" alt="Evaluation Diagnostique" /></p></a>
                                    
                                <!-- PREMIERE PARTIE - La fonction affine -->
                                <h3 class="pt-5">Téléchargez le powerpoint utilisé en cours ci dessous</h3>
                                <div class="row pt-5 pb-5">
                                    <div class="col-md-6" id="Arrow_right">
                                        <img src="../../IMAGES/TEACHING/Arrow_right.png" alt="Here Evaluation"/>
                                    </div>
                                    <div class="Evaluation_File col-md-6 m-auto">
                                        <a href="Evaluation_Fonctions_graph.pdf" download="Cours - Les fonctions usuelles"><p>Télécharger le sujet : <img src="../../IMAGES/TEACHING/Download.png" alt="Evaluation Diagnostique" /></p></a>
                                        <a href="Evaluation_Fonctions_graph.pdf" download="Cours - Les fonctions usuelles"><p>Télécharger la correction : <img src="../../IMAGES/TEACHING/Download.png" alt="Evaluation Diagnostique" /></p></a>
                                    </div>

                                    <div class="col-12">
                                        <h3>Les notions clés</h3>
                                        <p>Les notions clées abordées dans ce chapitre</p>
                                    </div>
                                </div>
                            </div>
`
    Hide_all();
    document.getElementById('Evaluation_formative').style.display = 'flex';
    document.getElementById('Evaluation_formative').innerHTML = content;
}

//PROJET - FUNCTION

function Display_Projet() {
    event.preventDefault();
    console.log('Projet');
    let content =
        `
<!-- NOTION DE FONCTION -->
                            <div class="col-12" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="2000">
                                <h2 class="pt-5  pb-5">C'est parti pour le projet!</h2>
                                <p class="text-justify">Nous allons utiliser les notions abordées et les compétences que vous avez acquis tout au long de ce chapitre pour monter un projet concrêt!</p>
                                <p class="text-justify">Pour rappel, les compétences travaillées au cours de ce chapitre peuvent se résumer ainsi :</p>
                                <ol>
                                    <li>Utiliser les fonctions usuelles affines, polynomes, exponentielles & logarithme pour modéliser un phénomène ou étudier son évolution</li>
                                    <li>Représenter graphiquement l'évolution d'un phénomène en utilisant des outils graphiques (tableur EXCEL et calculette)</li>
                                    <li>Résoudre un problème contextualisé en utilisant une étude de fonction.</li>
                                </ol>


                                <!-- PREMIERE PARTIE - La fonction affine -->
                                <h3 class="pt-5">Vous trouverez ci-dessous l'énoncé du projet à mener pour cette séquence. Bon courage!</h3>
                                <div class="row pt-5 pb-5">
                                    <div class="col-md-6" id="Arrow_right">
                                        <img src="../../IMAGES/TEACHING/Arrow_right.png" alt="Here Evaluation"/>
                                    </div>
                                    <div class="Evaluation_File col-md-6 m-auto">
                                        <a href="Evaluation_Fonctions_graph.pdf" download="Cours - Les fonctions usuelles"><p>Télécharger l'énoncer : <img src="../../IMAGES/TEACHING/Download.png" alt="Evaluation Diagnostique" /></p></a>
                                        <p>Le projet le plus concluant sera mis en ligne!</p>
                                    </div>

                                    <div class="col-12">
                                        <h3>Les notions clés</h3>
                                        <p>Les notions clées abordées dans ce chapitre</p>
                                    </div>
                                </div>
                            </div>
`
    Hide_all();
    document.getElementById('Projet').style.display = 'flex';
    document.getElementById('Projet').innerHTML = content;
}
