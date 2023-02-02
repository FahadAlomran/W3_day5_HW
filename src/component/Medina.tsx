import { Button, Card,CardBody,CardFooter,Collapse,Heading,Image, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import React from 'react'

function Medina() {
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
    src='https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-batch3b/destination-page--medina-/destination_page_medina_map__1.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Medina</Heading>

      <Collapse startingHeight={50} in={show}>
      Medina is a city in western Saudi Arabia. In the city center, the vast Al-Masjid an-Nabawi (Prophet's Mosque) is a major Islamic pilgrimage site. Its striking Green Dome rises above the tombs of the Prophet Muhammad and early Islamic leaders Abu Bakr and Umar. The Masjid al-Qiblatain (Qiblatain Mosque) is known as the site where the Prophet Muhammad received the command to change the direction of prayer to Mecca.        </Collapse>
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

export default Medina