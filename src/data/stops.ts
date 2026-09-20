import type { Stop } from '@/types';

export const stops: Stop[] = [
  {
    id: 'pretoria', name: 'Pretoria', region: 'Gauteng', kind: 'Journey start', order_index: 1,
    description: 'Administrative capital of South Africa and the starting point of the journey.',
    story: 'Your journey begins in Pretoria. The first rail leg uses Gautrain to connect Pretoria Station with Johannesburg Park Station.',
    fun_fact: 'The Gautrain leg is approximately 35–42 minutes.',
  },
  {
    id: 'johannesburg', name: 'Johannesburg', region: 'Gauteng', kind: 'Interchange', order_index: 2,
    description: 'The City of Gold and the interchange between the Gautrain and Shosholoza Meyl legs.',
    story: 'Johannesburg grew from the 1886 gold rush and became the interchange point for the longer journey south-west.',
    fun_fact: 'Park Station is where the two rail services connect in this journey plan.',
  },
  {
    id: 'kimberley', name: 'Kimberley', region: 'Northern Cape', kind: 'Cultural stop', order_index: 3,
    description: 'Home of the Big Hole and a strong connection to South Africa’s diamond-rush history.',
    story: 'Kimberley tells the story of the diamond rush through the Big Hole, Kimberley Mine Museum and its restored Old Town.',
    fun_fact: 'The Big Hole was mined from 1871 to 1914 and reaches about 215 metres deep.',
  },
  {
    id: 'de-aar', name: 'De Aar', region: 'Northern Cape', kind: 'Railway heritage', order_index: 4,
    description: 'A historic railway junction with strong Karoo and railway heritage.',
    story: 'Founded in 1881 as a railway junction, De Aar became an important connection point in the interior.',
    fun_fact: 'It is described in the research as South Africa’s second-largest railway junction after Germiston.',
  },
  {
    id: 'hutchinson-merriman', name: 'Hutchinson / Merriman', region: 'Northern Cape', kind: 'Operational stop', order_index: 5,
    description: 'Small Karoo rail sidings that act as practical waypoints on the route.',
    story: 'These are operational waypoints rather than conventional tourist destinations, helping the app narrate the changing rail landscape.',
    fun_fact: 'The research identifies Tourist-class Hutchinson and Economy-class Merriman services branching toward Cape Town.',
  },
  {
    id: 'worcester', name: 'Worcester', region: 'Western Cape', kind: 'Nature stop', order_index: 6,
    description: 'Gateway to the Breede River Valley and a base for exploring the Karoo Desert National Botanical Garden.',
    story: 'As the train enters the Western Cape, Worcester introduces the Breede River Valley and its surrounding landscapes.',
    fun_fact: 'The research describes the Karoo Desert National Botanical Garden as the only true succulent garden in the Southern Hemisphere.',
  },
  {
    id: 'wellington', name: 'Wellington', region: 'Western Cape', kind: 'Heritage stop', order_index: 7,
    description: 'One of the Cape’s older towns, with Huguenot and local heritage.',
    story: 'Wellington connects the route to Cape heritage, museums, wine and brandy estates.',
    fun_fact: 'The town was founded by French Huguenot refugees in 1688.',
  },
  {
    id: 'paarl', name: 'Paarl', region: 'Western Cape', kind: 'Cultural stop', order_index: 8,
    description: 'A Cape Winelands destination associated with the Afrikaans Language Monument.',
    story: 'Paarl adds language and cultural history to the journey before the final approach to Cape Town.',
    fun_fact: 'The Afrikaans Language Monument was established in 1975 and is described in the research as the world’s only monument to a language.',
  },
  {
    id: 'bellville', name: 'Bellville', region: 'Western Cape', kind: 'Final approach', order_index: 9,
    description: 'A major Cape rail switching point and the final approach to Cape Town.',
    story: 'Bellville shifts the story from regional rail travel into everyday metropolitan Cape Town.',
    fun_fact: 'The research notes Bellville’s rail operation has been in place since 1861.',
  },
  {
    id: 'cape-town', name: 'Cape Town', region: 'Western Cape', kind: 'Journey end', order_index: 10,
    description: 'The journey ends at the gateway to the Cape Peninsula, Table Mountain and the Atlantic coast.',
    story: 'Cape Town is the final destination and the place where the full Pretoria-to-Cape Town rail story comes together.',
    fun_fact: 'The route is framed as an affordable domestic-tourism journey rather than a premium rail experience.',
  },
];
