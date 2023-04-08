import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,Center, Card, CardBody, CardFooter,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
    HStack,
    Divider,
    VStack,
    Grid, GridItem
} from '@chakra-ui/react'

function PokeInfo({pokemon}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log("POKE", pokemon)
    const x = (id) => id < 10 ? "00" : id < 100 ? "0" : "";
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Card maxW='sm'  m='2' key={pokemon.id} onClick={onOpen}>
                <CardBody>
                    <img 
                        src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${x(pokemon.id)}${pokemon.id}.png`}
                        alt={pokemon.name.english}
                    />
                    <Center mt='3'>
                        <Text fontSize='xl'>{pokemon.name.english}</Text>
                    </Center>
                </CardBody>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack>
                            <Text>{pokemon.name.english}</Text>
                            {
                                pokemon.type.map(t => 
                                    <Tag key={t}>{t}</Tag>
                                )
                            }
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <img 
                                src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${x(pokemon.id)}${pokemon.id}.png`}
                                alt={pokemon.name.english}
                            />
                            <Divider />
                            <Grid templateRows='1fr 1fr 1fr' templateColumns='1fr 1fr 1fr' gap={5}>
                                <GridItem w='100%' h='10'>
                                    <Text fontSize='lg'>HP: {pokemon.base.HP}</Text>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                    <Text fontSize='lg'>Attack: {pokemon.base.Attack}</Text>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                    <Text fontSize='lg'>Defense: {pokemon.base.Defense}</Text>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                    <Text fontSize='lg'>Sp. Attack: {pokemon.base['Sp. Attack']}</Text>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                    <Text fontSize='lg'>Sp. Defense: {pokemon.base['Sp. Defense']}</Text>
                                </GridItem>
                                <GridItem w='100%' h='10'>
                                    <Text fontSize='lg'>Speed: {pokemon.base.Speed}</Text>
                                </GridItem>
                            </Grid>

                            {/* <VStack>
                                <Text>HP: {pokemon.base.HP}</Text>
                                <Text>Attack: {pokemon.base.Attack}</Text>
                                <Text>Defense: {pokemon.base.Defense}</Text>
                            </VStack>
                            <VStack>
                                <Text>Sp. Attack: {pokemon.base['Sp. Attack']}</Text>
                                <Text>Sp. Defense: {pokemon.base['Sp. Defense']}</Text>
                                <Text>Speed: {pokemon.base.Speed}</Text>
                            </VStack> */}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PokeInfo;