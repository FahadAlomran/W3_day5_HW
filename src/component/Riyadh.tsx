import { Button, Card,CardBody,CardFooter,Collapse,Heading,Image, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import React from 'react'

function Riyadh() {
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
    src='https://upload.wikimedia.org/wikipedia/commons/2/20/Riyadh_Skyline.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Riyadh</Heading>

      <Collapse startingHeight={50} in={show}>
      Riyadh, Saudi Arabia’s capital and main financial hub, is on a desert plateau in the country’s center. 
      Business district landmarks include the 302m-high Kingdom Centre, with a sky bridge connecting 2 towers, and 267m-high Al Faisaliah Centre, with a glass-globe summit. In the historical Deira district, Masmak Fort marks the site of the 1902 raid that gave the Al Sauds control of Riyadh
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

export default Riyadh