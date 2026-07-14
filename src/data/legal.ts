// Informations légales & contact reprises de cannakit.fr
export const company = {
  legalName: 'Bud&Co SAS',
  brand: 'Cannakit',
  form: 'Société par Actions Simplifiée (SAS)',
  capital: '5 000 €',
  address: '2 Boulevard Paul Chabas, 84000 Avignon, France',
  siren: '953 773 538',
  rcs: 'Avignon 953 773 538',
  tva: 'FR76 953773538',
  phone: '04 65 81 07 36',
  phoneIntl: '+33 4 65 81 07 36',
  email: 'contact@cannakit.fr',
}

export interface LegalSection {
  heading?: string
  paragraphs: string[]
}

export interface LegalDoc {
  slug: string
  title: string
  updated?: string
  sections: LegalSection[]
}

export const legalDocs: Record<string, LegalDoc> = {
  conditions: {
    slug: 'conditions',
    title: 'Conditions générales',
    updated: '13 juillet 2026',
    sections: [
      {
        paragraphs: [
          'Conditions Générales d’Utilisation et de Vente.',
          'Les présentes Conditions Générales régissent l’utilisation du site Internet www.cannakit.fr et les achats de produits effectués sur ce site. Elles sont conclues entre :',
          'Bud&Co SAS, exerçant sous le nom commercial Cannakit (Forme juridique : Société par Actions Simplifiée (SAS) ; Capital social : 5 000 €).',
          'Siège social : 2 Boulevard Paul Chabas, 84000 Avignon, France.',
          'SIREN : 953 773 538 / RCS : Avignon 953 773 538 (TVA intracommunautaire : FR76 953773538).',
          'Téléphone : 04 65 81 07 36.',
          'Ci-après dénommée « le Vendeur » ou « Bud&Co ».',
          'En accédant au site ou en passant commande, vous acceptez sans réserve les présentes Conditions Générales ainsi que notre Politique de Confidentialité.',
        ],
      },
      { heading: 'Article 1 – Objet', paragraphs: ['Les présentes Conditions Générales régissent les ventes de produits et accessoires proposés sur le site www.cannakit.fr.'] },
      { heading: 'Article 2 – Clients et capacité', paragraphs: ['Les produits sont proposés aux particuliers et aux professionnels. Le client déclare être juridiquement capable de conclure un contrat et disposer de la capacité légale requise pour les produits proposés.'] },
      { heading: 'Article 3 – Commandes et conclusion du contrat', paragraphs: ['Toute commande est considérée comme définitive après validation du panier, acceptation des présentes Conditions Générales et validation du paiement. Le client a la possibilité de vérifier et corriger les erreurs avant validation définitive. Le Vendeur se réserve le droit de refuser ou d’annuler toute commande en cas d’informations inexactes, de suspicion de fraude, de litige antérieur ou d’indisponibilité des produits.'] },
      { heading: 'Article 4 – Prix', paragraphs: ['Les prix sont exprimés en euros et incluent la TVA applicable. Les frais de livraison sont indiqués avant validation de la commande. Les produits sont facturés au tarif en vigueur au moment de la commande.'] },
      { heading: 'Article 5 – Paiement', paragraphs: ['Les paiements sont sécurisés et s’effectuent via SumUp ou tout autre moyen proposé sur le site. La commande n’est considérée comme acceptée qu’après validation complète du paiement.'] },
      { heading: 'Article 6 – Livraison', paragraphs: ['Les commandes sont expédiées via les transporteurs proposés sur le site (notamment Colissimo, Chronopost, Mondial Relay ou tout autre prestataire disponible). Les délais de livraison sont communiqués à titre indicatif (généralement 2 à 7 jours ouvrés en France métropolitaine). Le Vendeur ne saurait être tenu responsable des retards imputables au transporteur, aux autorités ou à un cas de force majeure. Les frais de livraison sont calculés automatiquement selon le poids, le transporteur et la destination, et sont indiqués avant validation définitive de la commande.'] },
      { heading: 'Article 7 – Transfert des risques', paragraphs: ['Pour les consommateurs, les risques sont transférés au moment de la remise physique du colis. Pour les professionnels, les risques sont transférés dès la remise au transporteur.'] },
      { heading: 'Article 8 – Droit de rétractation', paragraphs: ['Conformément au Code de la consommation, le consommateur dispose d’un délai de 14 jours à compter de la réception des produits pour exercer son droit de rétractation. Les produits doivent être retournés non utilisés, dans leur emballage d’origine intact et complet, en parfait état de revente. Les frais de retour restent à la charge du client. Une fonctionnalité permettant d’exercer le droit de rétractation en ligne est mise à disposition via le formulaire de contact du site.'] },
      { heading: 'Article 9 – Exceptions au droit de rétractation', paragraphs: ['Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé notamment pour : (1) les produits descellés pour des raisons d’hygiène ou de protection de la santé ; (2) les produits personnalisés ; (3) les produits détériorés après réception par le client. Ces produits sont identifiés comme « Vente définitive – Non retournable » sur leur fiche produit.'] },
      { heading: 'Article 10 – Garanties légales', paragraphs: ['Les consommateurs bénéficient de la garantie légale de conformité et de la garantie légale contre les vices cachés, conformément à la législation française.'] },
      { heading: 'Article 11 – Responsabilité', paragraphs: ['Le Vendeur ne pourra être tenu responsable d’une mauvaise utilisation des produits, d’une incompatibilité avec le matériel du client, du non-respect de la réglementation locale du pays de destination, ou de dommages indirects.'] },
      { heading: 'Article 12 – Force majeure', paragraphs: ['Le Vendeur ne saurait être tenu responsable de l’inexécution de ses obligations en cas de force majeure.'] },
      { heading: 'Article 13 – Données personnelles', paragraphs: ['Les données personnelles collectées sont traitées conformément à la Politique de Confidentialité accessible sur le site.'] },
      { heading: 'Article 14 – Propriété intellectuelle', paragraphs: ['L’ensemble des contenus du site (textes, images, descriptions, logos, etc.) est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.'] },
      { heading: 'Article 15 – Médiation', paragraphs: ['Conformément au Code de la consommation, le consommateur peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu. Les coordonnées du médiateur désigné sont disponibles sur simple demande via le formulaire de contact.'] },
      { heading: 'Article 16 – Droit applicable et juridiction', paragraphs: ['Les présentes Conditions Générales sont régies par le droit français. Tout litige sera soumis aux juridictions compétentes conformément aux dispositions légales applicables.'] },
      { heading: 'Article 17 – Divisibilité', paragraphs: ['Toute disposition des présentes Conditions Générales qui viendrait à être nulle, illégale ou inapplicable sera réputée dissociée du reste, qui demeurera valable et exécutoire.'] },
    ],
  },
  confidentialite: {
    slug: 'confidentialite',
    title: 'Politique de confidentialité',
    updated: '13 juillet 2026',
    sections: [
      { paragraphs: ['Bud&Co SAS, exerçant sous le nom commercial Cannakit, est responsable du traitement des données à caractère personnel collectées sur le site www.cannakit.fr (ci-après le « Site »).', 'La protection de votre vie privée est primordiale. La présente Politique de Confidentialité décrit la manière dont nous collectons, traitons et partageons vos données personnelles lorsque vous visitez le Site ou passez commande.'] },
      { heading: 'Données que nous collectons', paragraphs: ['Lorsque vous passez commande, nous collectons : nom, adresse de facturation et de livraison, informations de paiement, adresse e-mail et numéro de téléphone.', 'Lorsque vous naviguez sur le Site, nous collectons automatiquement des informations sur votre appareil (adresse IP, type de navigateur, fuseau horaire, pages consultées, etc.) via des cookies, fichiers journaux et balises.'] },
      { heading: 'Finalités du traitement', paragraphs: ['Vos données sont traitées pour : exécuter votre commande, assurer le service client, détecter les fraudes, améliorer le Site et, le cas échéant, vous adresser des communications marketing si vous y avez consenti.'] },
      { heading: 'Partage des données', paragraphs: ['Nous partageons vos données avec SumUp (hébergement de la boutique et traitement des paiements) et, le cas échéant, avec des prestataires de livraison ou techniques nécessaires à l’exécution de nos services. Ces prestataires sont contractuellement tenus de ne traiter vos données que pour les finalités convenues.'] },
      { heading: 'Transferts internationaux', paragraphs: ['Certaines données peuvent être transférées en dehors de l’Espace économique européen. Dans ce cas, nous mettons en place les garanties appropriées (clauses contractuelles types de la Commission européenne ou équivalent).'] },
      { heading: 'Vos droits (RGPD)', paragraphs: ['Vous disposez des droits d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition, de portabilité et de retrait du consentement. Vous pouvez les exercer via le formulaire de contact du Site ou à l’adresse contact@cannakit.fr. Vous avez également le droit d’introduire une réclamation auprès de la CNIL.'] },
      { heading: 'Conservation des données', paragraphs: ['Les données relatives aux commandes sont conservées aussi longtemps que nécessaire à l’exécution du contrat et au respect de nos obligations légales, puis supprimées ou anonymisées.'] },
      { heading: 'Sécurité', paragraphs: ['Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données.'] },
      { heading: 'Modifications', paragraphs: ['Nous pouvons mettre à jour cette Politique. La version en vigueur est celle publiée sur le Site.'] },
      { heading: 'Contact', paragraphs: ['Bud&Co SAS – Cannakit', '2 Boulevard Paul Chabas, 84000 Avignon', 'Téléphone : 04 65 81 07 36'] },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Politique de cookies',
    updated: '09/04/2024',
    sections: [
      { paragraphs: ['Lorsque vous visitez ou interagissez avec nos sites, nous ou nos prestataires de services autorisés pouvons utiliser des cookies, balises Web et autres technologies similaires pour stocker des informations qui nous permettront de vous fournir une meilleure expérience, plus rapide et plus sécurisée, ainsi qu’à des fins publicitaires.', 'La présente page est conçue pour vous aider à mieux comprendre lesdites technologies et l’utilisation que nous en faisons sur nos sites.'] },
      { heading: 'Que sont les cookies, balises Web et technologies similaires ?', paragraphs: ['Comme la plupart des sites, nous utilisons des technologies qui sont de petits fichiers de données placés sur votre ordinateur, tablette, téléphone mobile ou tout autre appareil, qui nous permettent d’enregistrer un certain nombre d’informations lorsque vous visitez ou interagissez avec nos sites, services, applications, messageries et outils.', 'Cookies : petits fichiers texte placés dans la mémoire de votre navigateur lorsque vous visitez un site Web. Ils permettent à un site de reconnaître un appareil ou un navigateur spécifique.', 'Les cookies de session expirent à la fin de votre session de navigation. Les cookies persistants sont stockés entre les sessions. Les cookies internes sont définis par le site visité ; les cookies tiers par un site tiers.', 'Les cookies peuvent être désactivés ou supprimés via les outils disponibles sur la plupart des navigateurs.'] },
      { heading: 'Cookies de performance', paragraphs: ['Ce site utilise des cookies de performance : ils nous permettent de compter les visites et d’identifier les sources de trafic afin de mesurer et d’améliorer la performance du site. Toutes les informations collectées sont agrégées et donc anonymes.', 'Cookies utilisés : _ga (2 ans, tiers), _gid (24 heures, tiers), _ga_ (2 ans, tiers), _gac_gb_ (90 jours, tiers).'] },
      { heading: 'À propos de la présente politique', paragraphs: ['Nous pouvons modifier ponctuellement la politique sur les cookies, en tout ou en partie, à notre discrétion. La dernière version de ce document sera toujours disponible sur notre site et prendra effet à la date de sa mise à jour.', 'Pour toute question, veuillez contacter CannaKit.'] },
    ],
  },
}
