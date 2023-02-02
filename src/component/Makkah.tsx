import { Button, Card,CardBody,CardFooter,Collapse,Heading,Image, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import React from 'react'

function Makkah() {
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
    src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Great_Mosque_of_Mecca1.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Makkah</Heading>

      <Collapse startingHeight={50} in={show}>
      Mecca, in a desert valley in western Saudi Arabia, is Islam’s holiest city, as it’s the birthplace of the Prophet Muhammad and the faith itself. Only Muslims are allowed in the city, with millions arriving for the annual Hajj (pilgrimage). Dating from the 7th century, the central Masjid al-Haram (Sacred Mosque) surrounds the Kaaba, the cloth-covered cubic structure that’s Islam’s most sacred shrine      </Collapse>
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

export default Makkah