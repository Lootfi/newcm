import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../common/src/components/Box';
import Text from '../../../../../common/src/components/Text';
import Heading from '../../../../../common/src/components/Heading';
import Container from '../../../../../common/src/components/UI/Container';
import SectionWrapper from './fonc.style';
import foncImage from 'common/src/assets/image/steps/Step_1.jpg';

const FoncSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  secDes,
  topHeading
}) => {
  return (
    <SectionWrapper>
      <Container>
        <Box className="sectionBox" {...secTitleWrapper}>
          <Text {...secText} content="LA BASE DE CONTACTS MUSIQUE ULTIME" />
          <div className="imagetext">
            <img className="image" src={foncImage} alt="fonctionnementImage" />
            <div className="text">
              <Heading {...secHeading} content="Contact Major" />
              <Text
                {...secDes}
                content="Major Contacts est une puissante base de données de contact médias. Un annuaire essentiel des contacts de l'industrie musicale Française qui vous offre l’opportunité unique d’entrer en contact avec des directeurs artistiques, talents scouts et labels managers de France."
              />
              <Text
                {...secDes}
                content="Il est utilisé par des artistes, des groupes, des managers, des producteurs, des musiciens et bien d’autres personnes, ne perdez pas de temps : soyez le prochain."
              />
            </div>
          </div>

          <div className="textimage">
            <img className="image" src={foncImage} alt="fonctionnementImage" />
            <div className="text">
              <Heading
                {...secHeading}
                content="9 artistes sur 10 n’arrivent pas à trouver les contacts clé de l’industrie musicale. En faites-vous partie ?"
              />
              <Text
                {...secDes}
                content="Comment faire pour que mes chansons passent à la radio ? Que contient un accord d'enregistrement ? Où puis-je obtenir un financement ? Si vous avez des
            questions importantes sur l'industrie de la musique, ne cherchez pas plus loin que nos contacts."
              />
              <Text
                {...secDes}
                content="Il existe des contacts gratuits en ligne qui soient obsolètes avec d'anciennes informations, ou qui ne vous fournissent qu'une liste partielle de contacts. Ces listes sont mises à jour annuellement ou semestriellement avec peu ou pas de changements du tout."
              />
              <Text
                {...secDes}
                content="Saviez-vous qu’une personne sur trois changerait de poste dans ce segment ? L'industrie des médias ne s'arrête jamais, et avec les gens qui déménagent, prennent leur retraite et quittent l'industrie, il peut être difficile de suivre le rythme"
              />
            </div>
          </div>

          <div className="imagetext">
            <img className="image" src={foncImage} alt="fonctionnementImage" />
            <div className="text">
              <Heading
                {...secHeading}
                content="Le guide complet pour faire décoller votre carrière"
              />
              <Text
                {...secDes}
                content="Chez Major Contacts nous avons passé d'innombrables années à rassembler les contacts les plus complexes de l'industrie de la musique. Aujourd’hui, nous avons une équipe de recherche dédiée à la mise à jour de notre fil d'actualité avec les derniers mouvements médiatiques. Le but étant de vous fournir les contacts les plus à jour, précis et les plus complets de l'industrie de la musique.À commencer par les grands labels de France comme Initial Artist Services, Roche Musique, Because Music, Idol et plus encore."
              />
              <Text
                {...secDes}
                content="Des journalistes locaux aux diffuseurs nationaux, Major Contacts a le bon contact média pour votre histoire."
              />
            </div>
          </div>

          <div className="textimage">
            <img className="image" src={foncImage} alt="fonctionnementImage" />
            <div className="text">
              <Heading
                {...secHeading}
                content="L'annuaire essentiel des contacts de l'industrie musicale française que les artistes musicaux méritent"
              />
              <Text
                {...secDes}
                content="Que vous soyez un label indépendant, un artiste, un chanteur, un musicien, un rappeur, un producteur, un manager, un éditeur, un ingénieur du son, un agent, une grande maison de disques, un distributeur ou un entrepreneur : De la réservation de concerts à l'envoi de démos à des labels de disques ou à la planification de votre propre sortie d’EP."
              />
              <Text
                {...secDes}
                content="Il s'agit de contacts dans des maisons de disque, des sociétés de relations publiques, de nouveaux blogs et magazines musicaux, de DJs et de producteurs radio, de promoteurs de concerts établis, de managers, d'éditeurs de musique et d'agences de synchronisation, ainsi que d'organisateurs de festivals et d’événements."
              />
            </div>
          </div>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

FoncSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  topHeading: PropTypes.object,
  secDes: PropTypes.object
};

FoncSection.defaultProps = {
  secTitleWrapper: {
    mb: ['30px', '50px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  topHeading: {
    // textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%'
  },
  secHeading: {
    // textAlign: 'center',
    fontSize: ['20px', '24px', '24px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mt: '30px',
    mb: '20px',
    // ml: 'auto',
    // mr: 'auto',
    lineHeight: '1.12',
    // width: '540px',
    maxWidth: '100%'
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#ccc',
    lineHeight: '1.705',
    ml: 'auto',
    mr: 'auto',
    width: ['700px'],
    maxWidth: '100%'
    // textAlign: 'center'
  }
};

export default FoncSection;
