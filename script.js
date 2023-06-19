class livre {
    constructor(titre,auteur,anneePublication,disponible){
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
        this.disponible = disponible;
    }
        titre(){
            console.log(this.titre);
        }
        auteur(){
            console.log(this.auteur);
        }
        anneePublication(){
            console.log(this.anneePublication);
        }
        disponible(){
            console.log(this.disponible);
        }
    }

const livre1 = new livre ("Moi, Claude", "Robert Graves", 1934, true)
const livre2 = new livre ("L’Homme qui devint Dieu", "Gérald Messadié", 1999, false)
