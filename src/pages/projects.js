
import catedral from '../assets/img/catedral.JPG'
import chonta from '../assets/img/chonta.jpg'
import iglesia2 from '../assets/img/iglesia2.JPG'
import torre from '../assets/img/torre.jpeg'
import res1 from '../assets/img/res1.jpeg'

import cate1 from '../assets/img/catedral_toluca/cate1.JPG'
import cate2 from '../assets/img/catedral_toluca/cate2.JPG'
import cate3 from '../assets/img/catedral_toluca/cate3.JPG'
import cate4 from '../assets/img/catedral_toluca/cate4.JPG'
import cate5 from '../assets/img/catedral_toluca/cate5.JPG'
// import cate6 from '../assets/img/catedral_toluca/cate6.JPG'

import zac1 from '../assets/img/zacango/zac1.jpg'
import zac2 from '../assets/img/zacango/zac2.jpg'
import zac3 from '../assets/img/zacango/zac3.jpeg'
import zac4 from '../assets/img/zacango/zac4.jpeg'
import zac5 from '../assets/img/zacango/zac5.jpg'

import chonta1 from '../assets/img/chontacoatl/chonta1.jpeg'
import chonta2 from '../assets/img/chontacoatl/chonta2.jpeg'
import chonta3 from '../assets/img/chontacoatl/chonta3.jpeg'
import chonta4 from '../assets/img/chontacoatl/chonta4.jpeg'

import atla1 from '../assets/img/atapulco/atla1.jpg'
import atla2 from '../assets/img/atapulco/atla2.jpg'
import atla3 from '../assets/img/atapulco/atla3.jpeg'
import atla4 from '../assets/img/atapulco/atla4.jpeg'
import atla5 from '../assets/img/atapulco/atla5.jpeg'

import tlax1 from '../assets/img/tlax/tlax1.JPG'
import tlax2 from '../assets/img/tlax/tlax2.JPG'
import tlax3 from '../assets/img/tlax/tlax3.JPG'
import tlax4 from '../assets/img/tlax/tlax4.JPG'
import tlax5 from '../assets/img/tlax/tlax5.JPG'

var projects = [
  {
    'title': 'Catedral de San José Toluca, Edo. Méx.',
    'imageTop': catedral,
    'year': 2009,
    'index': 1,
    'images': [
      {
        'src': catedral
      },
      {
        'src': cate3
      },
      {
        'src': cate4
      }
    ],
    'content': `Trabajos de intervención menor, por daños accionados por sismo y falta de mantenimiento del inmueble. Reintegración de elementos de cantera en cúpula mayor, inyección en junta constructiva,
      integración de aplanados, consolidación de basamento de escultura de San José, limpieza de pátinas de
      aleaciones de cobre, consolidación de elementos de cantera en balaustrados, reintegración de
      chaflanes, aplicación de hidrofugante.` },
  {
    'title': 'Templo de Santiago Zacango, Atenango del Río Guerrero.',
    'imageTop': res1,
    'year': 2010,
    'index': 2,
    'images': [
      {
        'src': res1
      },
      {
        'src': zac2
      },
      {
        'src': zac3
      },
      {
        'src': zac4
      },
      {
        'src': zac5
      }
    ],
    'content': `Estudios de mecánica de suelos, estudio de verticalidad de elementos,
    apuntalamiento convergente en bóvedas y cúpula de la nave principal, debido a la
    presencia de grietas por cortante las cuales estaban poniendo en riesgo de colapso a los elementos.` },
  {
    'title': 'Parroquia de San juan Chontalcoatlan, Guerrero, México.',
    'imageTop': chonta,
    'year': 2010,
    'index': 3,
    'images': [
      {
        'src': chonta
      },
      {
        'src': chonta2
      },
      {
        'src': chonta3
      },
      {
        'src': chonta4
      }
    ],
    'content': `Trabajos de apuntalamiento y reintegración de torre campanario por perdida de material pétreo que
    ponía en riesgo al elemento, liberación de aplanados, consolidación por medio de cosido e inyección de
    fracturas ocasionadas por sismos, reintegración de aplanados.` },
  {
    'title': 'San Pedro Atlapulco, Ocoyoacac, Estado de México.',
    'imageTop': torre,
    'year': 2013,
    'index': 4,
    'images': [
      {
        'src': torre
      },
      {
        'src': atla2
      },
      {
        'src': atla3
      },
      {
        'src': atla4
      }
    ],
    'content': `Trabajos preliminares de apuntalamiento por daño de sismo 19s en torre campanario, contrafuertes,
    barda perimetral del atrio y muro testero. Liberación de aplanados, consolidación por medio de cosido e
    inyección de fracturas, reintegración de los aplanados, consolidación y reintegración de muros de
    mamposteria.` },
  {
    'title': 'Parroquia de Nuestra Señora de Santa Ana, Tlaxmalac, municipio de Huitzuco de los Figueroa, Guerrero Méx',
    'imageTop': iglesia2,
    'index': 5,
    'year': 2013,
    'images': [
      {
        'src': iglesia2
      },
      {
        'src': tlax2
      },
      {
        'src': tlax3
      },
      {
        'src': tlax4
      },
      {
        'src': tlax5
      }
    ],
    'content': `Liberación de elementos de concreto, consolidación por medio de cocido e inyección de fracturas
    ocasionadas por sismos, sustitución de molduras ornamentales colocando lámina de oro de 23 ¾ kilates,
    impermeabilización base cal, pintura de cal de alta pureza, recuperación de elementos pétreos dañados
    o cubiertos con aplanados, recuperación de contrafuertes dañados.` }

]

export default projects
