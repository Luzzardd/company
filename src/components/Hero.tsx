import React from 'react'
import Image from 'next/image'
import logo from '../../public/image/1stline-jago-logo.png'
import { HStack } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Avatar } from './ui/avatar'
import { Rating } from "@/components/ui/rating"
import { Text } from '@chakra-ui/react'
const Hero = () => {
  return (
    <>
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
    <div className="md:grid md:grid-cols-2 sm:py-16">
        {/* Teks Bagian Kiri */}
        <div className="mt-4 md:mt-0 text-left">
            <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                <p className="text-base lg:text-lg bg-black">
                Kami adalah perusahaan Event Organizer yang menyediakan solusi lengkap untuk berbagai jenis acara, mulai dari perencanaan hingga pelaksanaan, dengan fokus pada detail dan pengalaman yang tak terlupakan. Dari pernikahan hingga konferensi dan acara perusahaan, tim kami siap membantu mewujudkan acara impian Anda dengan profesionalisme dan kreativitas. One Stop Event Management — solusi lengkap untuk semua kebutuhan acara Anda, dari awal hingga akhir, memastikan setiap acara berjalan lancar dan istimewa.
                </p>
            </div>
        </div>

        {/* Gambar Bagian Kanan */}
        <div className="flex justify-center md:justify-start mt-8 md:mt-0">
            <Image 
                className="mx-auto rounded-xl py-8 md:py-0 mt-10" 
                src={logo}
                alt="About " 
                width={450} 
                height={300} 
            />
        </div>
    </div>
</div>
 <HStack justify="center"  py="6" px="4">
 {/* First Card */}
 <Stack
   maxW="320px"
  
   p="6"
   bg="white"
   borderRadius="md"
   boxShadow="md"
   align="center"
 >
   <Rating className=' initialRating={5} readonly fullSymbol="★" emptySymbol="☆"' />
   <Text>
     Sage is a great software engineer. He is very professional and
     knowledgeable.
   </Text>
   <HStack>
     <Avatar
       name="Matthew Jones"
       src="https://randomuser.me/api/portraits/men/70.jpg"
     />
     <Stack textStyle="sm" gap="0">
       <Text fontWeight="medium">Matthew Jones</Text>
       <Text color="fg.muted">CTO, Company</Text>
     </Stack>
   </HStack>
 </Stack>

 {/* Second Card */}
 <Stack
   maxW="320px"
  
   p="6"
   bg="white"
   borderRadius="md"
   boxShadow="md"
   align="center"
 >
   <Rating className=' initialRating={5} readonly fullSymbol="★" emptySymbol="☆"' />
   <Text>
     Sage is a great software engineer. He is very professional and
     knowledgeable.
   </Text>
   <HStack>
     <Avatar
       name="Matthew Jones"
       src="https://randomuser.me/api/portraits/men/70.jpg"
     />
     <Stack textStyle="sm" gap="0">
       <Text fontWeight="medium">Matthew Jones</Text>
       <Text color="fg.muted">CTO, Company</Text>
     </Stack>
   </HStack>
 </Stack>

 {/* Third Card */}
 <Stack
   maxW="320px"
  
   p="6"
   bg="white"
   borderRadius="md"
   boxShadow="md"
   align="center"
 >
   <Rating className=' initialRating={5} readonly fullSymbol="★" emptySymbol="☆"' />
   <Text>
     Sage is a great software engineer. He is very professional and
     knowledgeable.
   </Text>
   <HStack>
     <Avatar
       name="Matthew Jones"
       src="https://randomuser.me/api/portraits/men/70.jpg"
     />
     <Stack textStyle="sm" gap="0">
       <Text fontWeight="medium">Matthew Jones</Text>
       <Text color="fg.muted">CTO, Company</Text>
     </Stack>
   </HStack>
 </Stack>
</HStack>
    </>
    
  )
}

export default Hero