import React from 'react'
import BentoBox from './BentoBox';

const App = () => {
  const overviewdataRoll = [
    {
      label: "column-1",
      segment: [
        {
          label: "top",
          // component: <BentoMarketShare />,
          component: <div></div>,
        },
        {
          label: "bottom",
          // component: <BentoCoveredPops />,
          component: <div></div>,
        },
      ],
    },
    {
      label: "column-2",
      segment: [
        {
          label: "top",
          // component: <BentoGapToCompetition />,
          component: <div></div>, //
        },
        {
          label: "bottom",
          // component: <BentoOnAirSites />,
          component: <div></div>,
        },
      ],
    },
    {
      label: "column-3",
      segment: [
        {
          label: "top",
          // component: <BentoCapexOpex />,
          component: <div></div>, //,
        },
        {
          label: "bottom",
          // component: <BentoCallsToCare />,
          component:  <div></div>,
        },
      ],
    },
  ];
  return (
    <div>
      <BentoBox   dataRoll={overviewdataRoll}/>
    </div>
  )
}

export default App
