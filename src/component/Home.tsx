
    import React, { useEffect, useState } from "react";
    import { Box, Flex, Image, Text } from "@chakra-ui/react";
    function Home() {  
        const slides = [
        {
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b1/42/medina.jpg?w=1600&h=900&s=1/",
        },
        {
          img: "https://welcomesaudi.com/uploads/0000/1/2021/07/23/23-new-jeddah-corniche-makkah-province.jpg",
        },
        {
          img: "https://cdn.discordapp.com/attachments/823278053944721419/1070521667522138212/Riyadh_Skylinegg.jpg",
        },
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Great_Mosque_of_Mecca1.jpg",
        },
        
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const slidesCount = slides.length;
    
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
    
      const SLIDES_INTERVAL_TIME = 3000;
      const ANIMATION_DIRECTION = "right";
    
      useEffect(() => {
        const prevSlide = () => {
          setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };
    
        const nextSlide = () => {
          setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };
    
        const automatedSlide = setInterval(() => {
          ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
      }, [slidesCount]);
      
    
    
    
    
    
    
      return (
        <><Box fontSize='4xl'ml={500} p={5}>Welcome to Saudi Arabia </Box><Flex
              w="full"
              bg="#edf3f8"
              _dark={{ bg: "#3e3e3e" }}
              p={10}
              alignItems="center"
              justifyContent="center"
          >
              <Flex w="full" overflow="hidden">
                  <Flex pos="relative" h="500px" w="full" {...carouselStyle}>
                      {slides.map((slide, sid) => (
                          <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                              <Text
                                  color="white"
                                  fontSize="xs"
                                  p="8px 12px"
                                  pos="absolute"
                                  top="0"
                                  whiteSpace="nowrap"
                              >
                                  {sid + 1} / {slidesCount}
                              </Text>
                              <Image
                                  src={slide.img}
                                  alt="carousel image"
                                  boxSize="full"
                                  backgroundSize="cover" />
                          </Box>
                      ))}
                  </Flex>
              </Flex>
          </Flex></>
      );
    };
    
    
    export default Home