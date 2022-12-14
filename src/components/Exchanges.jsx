import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { Container, Heading, HStack, VStack, Image,Text} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState("");

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
      console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
        
      }
    };
    fetchExchanges();
  }, []);

  if(error)
    return <ErrorComponent message={"Error while fetching the Exchanges"}/>;

  return (

    <Container maxW={"container.xl"}>
      {loading ? 
        <Loader />
       : 
        <>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {exchanges.map((i)=> (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                url={i.url}
                rank={i.trust_score_rank}
              />
            ))}
          </HStack>
        </>
      }
    </Container>
  );
};


const ExchangeCard = ({ name, img, rank, url }) => 
  <a href={url} target="_blank" rel="noreferrer">

<VStack w={'52'} p={'8'} shadow={'lg'} borderRadius={"lg"} transition={"all 0.3s"} m={'4'} 
css={{
  "&:hover":{
    transform:"scale(1.1)",
  },
}}
>
  <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={"Exchanges"}/>
  <Heading size={"md"} noOfLines={1}>{rank}</Heading>
  <Text>{name}</Text>
</VStack>

  </a>;



export default Exchanges;
