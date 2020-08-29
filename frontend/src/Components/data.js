
export const noneOptions = [
  { value: '', label: 'None', isFixed: true }
];

export const speiseOptions = [
    { value: 'Rind', label: 'Rind' },
    { value: 'Schwein', label: 'Schwein' },
    { value: 'Geflügel', label: 'Geflügel' }
  ];
  
  export const beilageOptions = [
    { value: 'Nudeln', label: 'Nudeln' },
    { value: 'Spätzle', label: 'Spätzle' },
    { value: 'Reis', label: 'Reis' },
  ];

  export const gemüseOptions = [
    { value: 'Brokkoli', label: 'Brokkoli' },
    { value: 'Mischgemüse', label: 'Mischgemüse' },
    { value: 'Karotte', label: 'Karotte' },
  ];

  export const sonstigesOptions = [
    { value: 'Käsespätzle', label: 'Käsespätzle' },
    { value: 'Lasagne', label: 'Lasagne' }
  ];

  export const groupedOptions = [
    {
      label: 'None',
      options: noneOptions,
    },
    
    {
      label: 'Fleisch',
      options: speiseOptions,
    },
    {
      label: 'Beilagen',
      options: beilageOptions,
    },
    {
      label: 'Gemüse',
      options: gemüseOptions,
    },
    {
      label: 'Sonstiges',
      options: sonstigesOptions,
    },
  ];





 export const optionsTyp = [
    { value: 'Frühstück', label: 'Frühstück' },
    { value: 'Mittagessen', label: 'Mittagessen' },
    { value: 'Catering', label: 'Catering' },
    { value: 'Event', label: 'Event' }
  ];

 export const optionsGrund = [
    { value: 'Ausgabe', label: 'Ausgabe' },
    { value: 'MHD', label: 'MHD' },
    { value: 'Überhang', label: 'Überhang' },
    { value: 'Tellerrücklauf', label: 'Tellerrücklauf' }
  ];

  export const optionsDepartment = [
    { value: 'AWKG', label: 'AWKG' },
    { value: 'WIS', label: 'WIS' },
    { value: 'CWF', label: 'CWF' }
  ];

 export const optionsGewicht = [
    { value: '0.5kg', label: '0.5kg' },
    { value: '1.0kg', label: '1.0kg' },
    { value: '1.5kg', label: '1.5kg' },
    { value: '2.0kg', label: '2.0kg' }
  ];