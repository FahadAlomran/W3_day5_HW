import { Button, Card,CardBody,CardFooter,Collapse,Heading,Image, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import React from 'react'

function Jeddah() {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)
  return (
    <>
   

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  margin={5}
  boxShadow='lg'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://welcomesaudi.com/uploads/0000/1/2021/07/23/23-new-jeddah-corniche-makkah-province.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>jeddah</Heading>

      <Collapse startingHeight={50} in={show}>
      Jeddah, a Saudi Arabian port city on the Red Sea, is a modern commercial hub and gateway for pilgrimages to the Islamic holy cities Mecca and Medina. Resort hotels, beaches and outdoor sculptures line the Corniche, a seafront promenade anchored by the iconic King Fahd’s Fountain. The city’s Al-Balad historic district dates to the 7th century and retains traditional homes built from coral
      </Collapse>
    </CardBody>

    <CardFooter>
    <Button size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
    </CardFooter>
  </Stack>
</Card>

   
    </>
  )
}

export default Jeddah