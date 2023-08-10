
import { styled } from 'styled-components';

const Dice = ({cDice,Sdice ,Rolldice}) => {
  



  // const Rolldice = () => {
  //   const SrandomNo = RandomNo(1, 6);
  //   Sdice(SrandomNo);
  // };

  return (
    <Main>
      <div className='dice' onClick={Rolldice}>
        <img src={`./images/dice/dice_${cDice}.png`} alt="" />
        
      </div>
    
    </Main>
  );
};

export default Dice;

const Main = styled.div`
  .dice {
    padding-top: 15px;
    display: flex;
    justify-content: center;
  }
  img {
    height: 130px;
    width: 130px;
  }
  
`;
