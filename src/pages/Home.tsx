import React, {useEffect, useLayoutEffect, useState} from 'react';
import {IonButton, IonContent, IonHeader, IonModal, IonPage, IonRange, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(30);

  useEffect(() => {
    setTimeout(() => {
      setLower(10);
      setUpper(25);
    }, 200)
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={'ion-padding'}>

        <IonRange
          label={'single'}
          dualKnobs={false}
          value={lower}
          snaps={true}
          pin={true}
          mode={'md'}
          min={0}
          max={30}
          onIonChange={e => {
            setLower((e.detail.value as any).lower);
            setUpper((e.detail.value as any).upper);
          }}
        />

        <IonRange
          label={'dual'}
          dualKnobs={true}
          value={{
            lower: lower,
            upper: upper,
          }}
          snaps={true}
          pin={true}
          mode={'md'}
          min={0}
          max={30}
          onIonChange={e => {
              setLower((e.detail.value as any).lower);
              setUpper((e.detail.value as any).upper);
          }}
        />

        <IonButton id={'open-modal'}>Open Modal</IonButton>

        <IonModal trigger={'open-modal'} className={'window'}>
          <div style={{width: '90vw', padding: '10rem 2rem'}}>

            <IonRange
              label={'single'}
              dualKnobs={false}
              value={lower}
              snaps={true}
              pin={true}
              mode={'md'}
              min={0}
              max={30}
              onIonChange={e => {
                setLower((e.detail.value as any).lower);
                setUpper((e.detail.value as any).upper);
              }}
            />

            <IonRange
              label={'dual'}
              dualKnobs={true}
              value={{
                lower: lower,
                upper: upper,
              }}
              snaps={true}
              pin={true}
              mode={'md'}
              min={0}
              max={30}
              onIonChange={e => {
                setLower((e.detail.value as any).lower);
                setUpper((e.detail.value as any).upper);
              }}
            />
          </div>

        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
