import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blog: { date: Date; mission: string[]; description: SafeHtml }[] = [];
  sortedBlog: { date: Date; mission: string[]; description: SafeHtml }[] = [];

  sortOptions = [
    { value: 'desc', label: 'Du plus récent au plus ancien' },
    { value: 'asc', label: 'Du plus ancien au plus récent' },
  ];

  selectedSortOption: string = 'desc';
  constructor(private sanitizer: DomSanitizer) {
    this.blog = [
      {
        date: new Date('2024-06-11'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Fix edit profil candidat, on ne pouvait pas edit si 3 profils<br>
          Enregistrement en bdd marche pour tout lors de la creation d'un profil
          mais lors de l'edit : ça marche pour "tout", "choisir ma mobilité" mais quelquels
          bugs quand on edit en faisant tout -> mon departement ajout de doublon
        `),
      },
      {
        date: new Date('2024-06-12'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Dans ~/employment/resumesearch.aspx mise en gras
          des 3 grandes catégories: électronique, génie électrique, automatisme
        `),
      },
      {
        date: new Date('2024-06-13'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Lors de la création et la modification d'un profil
          candidat, ce dernier peut choisir sa mobilité (Toute la France, son
          département, ou choisir ses départements un à un) Dans la CVThèque j'ai
          retirer code postal, la ville et le département et j'ai ajouté le front-end
          du choix de la mobilité candidat
        `),
      },
      {
        date: new Date('2024-06-14'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Fix de l'insertion de la mobilité en base de donnée,
          il y avait un pb avec les départements de la Corse (2A,2B)) mais tout
          marche maintenant. Stored procedure search resume qui ne marche pas
          encore (Filtre sur la mobilité du candidat)
        `),
      },
      {
        date: new Date('2024-06-17'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Stored procedure EMSearchResume La procédure marche en testant dans
          SMSS. Sur la page CVThèque une recherche en filtrant par mobilité
          marche.
        `),
      },
      {
        date: new Date('2024-06-18'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          CVThèque "modifier ma recherche" : sauvegarde les anciens filtres Fix
          filtre sur la "Fonction" SearchResume CVThèque Rajout Gers suppression
          doublon Loire en BDD(MGSTate) Fix liaison projet à GitHub
        `),
      },
      {
        date: new Date('2024-06-19'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Mobilité candidat visible dans la recherche de CV avant d'ajouter
          celui-ci à notre cvthèque CVThèque Ajouter un bouton supprimer tous les
          filtres FIX problème sauvegarde filtre "fonction" dans la CVThèque
        `),
      },
      {
        date: new Date('2024-06-20'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Admin avec accès limité, dans le back office cet admin n'a accès qu'à
          certaines parties du back office, les parties qui lui sont interdites
          sont donc cachés et inaccessibles. Documentation sur CuteSoft CuteEditor
          (Cute Editor for ASP.NET is by far the fastest, easiest, most powerful
          WYSIWYG HTML Editor for ASP.NET. Cute Editor for ASP.NET compatibles
          with legacy browsers. It's also available for PHP and ASP. It enables
          ASP.NET Web developers to replace any textbox with an intuitive
          Word-like WYSIWYG html editor.)
        `),
      },
      {
        date: new Date('2024-06-21'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Création table EMFormation en bdd Ajout front choix secteur et niveau de
          formation Ajout en BDD du secteur et niveau de formation marche lors de
          l'inscription
        `),
      },
      {
        date: new Date('2024-06-24'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Travail sur les formations inscription et modification du profil
        `),
      },
      {
        date: new Date('2024-06-26'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          J'ai essayé de faire marcher la licence key mais ça ne marche toujours pas.<br>
          L'inscription d'une formation marche, ainsi que l'ajout dynamique de
          formation <br> Lors de la modif du profil formation les informations ne sont
          pas encore toutes ramenées.
        `),
      },
      {
        date: new Date('2024-06-27'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          1H30 de recherche + live chat pour faire marcher la license cueeditor,
          marche sur le remote site mais pas en local Add, edit, delete formation
          marche lors de l'inscription et de la modification du profil
        `),
      },
      {
        date: new Date('2024-06-28'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Header différent admin accès limité dans le backoffice <br> Ajout des filtres
          de formations, ils marchent presque tous Get all formations marche sur
          la page formation
        `),
      },
      {
        date: new Date('2024-07-01'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Modification de l'affichage des formations Modification stored procedure
          pour ramener et filtres les formations Les filtres de formation marchent
          tous (par nom, lieu, niveau d'étude, domaine d'activité, type
          d'établissement) Nom de l'établissement à la place de nom et prénom lors
          de l'inscription/modification d'un compte formation
        `),
      },
      {
        date: new Date('2024-07-02'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Création page détaillée d'une formation/école avec toutes les formations qu'elle propose<br>

          Modification filtres Lieu et Niveau d'études<br>

          Fix des images de la partie Blog et des Offres d'emplois (205 images)<br>

          Ajout du header "VOUS ÊTES ORGANISME<br>

          DE FORMATION ?" sur la page d'inscription formation<br>
        `),
      },
      {
        date: new Date('2024-07-03'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Ajout filtre télétravail<br>
          Modification inscription formation télétravail<br>
          Ajout filtre télétravail dans la stored procédure<br>
          Affichage télétravail sur formation, puis sur le détails formations<br>

          Début : Ajout balise alt image pour améliorer le SEO <br>
          Optimisation inscription formation<br>
        `),
      },
      {
        date: new Date('2024-07-04'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Optimisation inscription/modification/suppression fomation<br>
          Début:<br>
          Backoffice validation formation<br>

          Fix de certains CVs non dispo. dans le back office<br> 
        `),
      },
      {
        date: new Date('2024-07-05'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Back office affichage de toutes les formations non validées<br>

          Back office possibilité de valider/supprimer des formations<br>
          Centre de formation affichage de max. 5 villes + autres<br>

          Fix problème niveau étude profil  candidat<br>
        `),
      },
      {
        date: new Date('2024-07-08'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Parcourir les formations approuvées + pouvoir les supprimer/désapprouver<br>

          Ajout filtre date/alphabétique sur Approuver les formations et Parcourir les formations<br>
          
          Problèmes résolus:<br>
          
          Ajout cvthèque recruteur qui ne marchait plus<br>
          
          Reset password pb modèle email backoffice<br>
        `),
      },
      {
        date: new Date('2024-07-09'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Fix du front sur l'affichage du blog (alors qu'on peut bien éditer la mission, le blog n'apparaît pas avec du contenu et du style)
        `),
      },
      {
        date: new Date('2024-07-10'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Correction de plusieurs bugs sur le front (Blog et CVthèque)<br>
          Ajout de sections de filtre et détails des formations<br>
          Réglage du CSS pour la partie blog<br>
        `),
      },
      {
        date: new Date('2024-07-11'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Correction d'erreurs sur les détails de formation et ajout d'images sur le blog<br>

          Mise à jour des liens d'image dans le blog pour correspondre au nouveau format<br>
        `),
      },
      {
        date: new Date('2024-07-12'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Nettoyage du code pour améliorer la lisibilité<br>
          Mise en place de tests pour vérifier les fonctionnalités du blog<br>
        `),
      },
      {
        date: new Date('2024-07-13'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Déploiement de nouvelles fonctionnalités sur la gestion des formations<br>
          Amélioration de l'interface utilisateur pour le blog<br>
        `),
      },
      {
        date: new Date('2024-07-14'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Ajout de nouvelles options de filtre dans la CVThèque<br>
          Amélioration des performances de la recherche de CV<br>
        `),
      },
      {
        date: new Date('2024-07-15'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Ajout d'un tableau récapitulatif des formations sur la page d'accueil<br>
          Correction de bugs mineurs dans le back office<br>
        `),
      },
      {
        date: new Date('2024-07-16'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Amélioration de la gestion des images dans le blog<br>
          Mise à jour de la documentation interne<br>
        `),
      },
      {
        date: new Date('2024-07-17'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Passage de quasiment toutes les images du site en format WebP.
        `),
      },
      {
        date: new Date('2024-07-18'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Images en format WebP marchent en local.
        `),
      },
      {
        date: new Date('2024-07-19'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          Passage de toutes les images du site en WebP, fix de bugs liés aux images
        `),
      },
      {
        date: new Date('2024-07-23'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
          J'ai trier le menu de navigation du backoffice , il a maintenant plus de titre, mais les liens sont mieux répartis.

J'ai également changer des traductions.
<br/><br/>
Avant: <br/>
          <img src="images/menuBOunsorted.png" alt="Image de description 3" style="max-width:300px;">
<br/><br/>
Après: <br/>

          <img src="images/menuBOsorted.png" alt="Image de description 3" style="max-width:300px;">
        `),
      },

      {
        date: new Date('2024-07-24'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
         Rédaction documentation
        `),
      },

      {
        date: new Date('2024-07-25'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
Ajout email et téléphone admiission pour les formations <br>
Lors de l'inscription:       
          <img src="images/image (26).png" alt="Image de description 3"  style="max-width:600px;">
          <img src="images/image (27).png" alt="Image de description 3"  style="max-width:600px;">

          Sur une formation:
          <img src="images/image (28).png" alt="Image de description 3"  style="max-width:600px;">


`),
      },

      {
        date: new Date('2024-07-26'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
Ajout version mobile sur les pages formations, détails formation, entreprise`),
      },

      {
        date: new Date('2024-07-30'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
Ajout page groupement professionnel:<br>
inscription<br>
modification profil<br>
détails`),
      },

      {
        date: new Date('2024-08-2'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
Balise H1 dynamique sur la page offre d'emploi pour améliorer la SEO
          <img src="images/seo1.png" alt="Image de description 3"  style="max-width:600px;">
          <img src="images/seo2.png" alt="Image de description 3"  style="max-width:600px;">
          <img src="images/seo3.png" alt="Image de description 3"  style="max-width:600px;">
          <img src="images/seo4.png" alt="Image de description 3"  style="max-width:600px;">

`),
      },

      {
        date: new Date('2024-08-4'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
Ajout filtre/légende des 3 grandes catégories sur la page entreprise
          <img src="images/image12.png" alt="Image de description 3" style="max-width:600px;"  >

`),
      },

      {
        date: new Date('2024-08-6'),
        mission: ['Première mission'],
        description: this.sanitizer.bypassSecurityTrustHtml(`
Ajout lien cliquable sur cdi&cdd freelance etc

          <img src="images/image13.png" alt="Image de description 3"  style="max-width:600px;">
          <br/>
Changement couleur bouton et actégorie:


            <img src="images/image14.png" alt="Image de description 3"  style="max-width:600px;">

`),
      },

      
    ];
    this.sortedBlog = [...this.blog]; // Initialise avec les données non triées
    this.sortBlog(); // Tri initial par défaut
  }

  sortBlog() {
    if (this.selectedSortOption === 'asc') {
      this.sortedBlog = [...this.blog].sort(
        (a, b) => a.date.getTime() - b.date.getTime()
      );
    } else {
      this.sortedBlog = [...this.blog].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      );
    }
  }

  onSortChange(event: any) {
    this.selectedSortOption = event.target.value;
    this.sortBlog();
  }
}
