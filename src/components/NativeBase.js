import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  VStack,
  Stack,
  Divider,
  ZStack,
  Button,
  Pressable,
  Badge,
  Spacer,
  Flex,
  Alert,
  IconButton,
  CloseIcon,
  Skeleton,
  Spinner,
  Avatar,
} from 'native-base';
const Test = () => {
  return (
    <ScrollView horizontal>
      <Center w="100%">
        <VStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}>
          <Skeleton h="40" />
          <Skeleton.Text px="4" />
          <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
        </VStack>
      </Center>
      <VStack space={4} alignItems="center">
        <Heading size="md">column-reverse3333</Heading>
        <Stack mb="2.5" mt="1.5" direction="column-reverse" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="sm"
            _text={{
              color: 'warmGray.50',
              fontWeight: 'medium',
            }}
            shadow={'3'}>
            Box 12222
          </Center>
          <Center
            bg="primary.500"
            size="16"
            rounded="sm"
            _text={{
              color: 'warmGray.50',
              fontWeight: 'medium',
            }}
            shadow={'3'}>
            Box 23333
          </Center>
          <Center
            size="16"
            bg="primary.700"
            rounded="sm"
            _text={{
              color: 'warmGray.50',
              fontWeight: 'medium',
            }}
            shadow={'3'}>
            Box 34444
          </Center>
        </Stack>
      </VStack>
    </ScrollView>
  );
};
const NativeBase = () => {
  return (
    <Center flex={1}>
      <Container style={{marginBottom: 10}}>
        <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Box
          alignSelf="center"
          bg="primary.500"
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            letterSpacing: 'lg',
          }}>
          This is a Box
        </Box>
      </Container>
      <HStack space={3} justifyContent="center">
        <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
        <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
      </HStack>
      <ScrollView>
        <VStack space="2.5" mt="4" px="8">
          <Heading size="md">row</Heading>
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 1
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 2
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 3
            </Center>
          </Stack>
          <Divider />
          <Heading size="md">column</Heading>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 1
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 2
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 3
            </Center>
          </Stack>
          <Divider />
          <ScrollView horizontal>
            <Heading size="md">row-reverse</Heading>
            <Stack mb="2.5" mt="1.5" direction="row" reversed space={3}>
              <Center
                size="16"
                bg="primary.400"
                rounded="sm"
                _text={{
                  color: 'warmGray.50',
                  fontWeight: 'medium',
                }}
                shadow={'3'}>
                Box 1
              </Center>
              <Center
                bg="primary.500"
                size="16"
                rounded="sm"
                _text={{
                  color: 'warmGray.50',
                  fontWeight: 'medium',
                }}
                shadow={'3'}>
                Box 2
              </Center>
              <Center
                size="16"
                bg="primary.700"
                rounded="sm"
                _text={{
                  color: 'warmGray.50',
                  fontWeight: 'medium',
                }}
                shadow={'3'}>
                Box 3
              </Center>
            </Stack>
          </ScrollView>
          <Divider />
          <Heading size="md">column-reverse3333</Heading>
          <Stack mb="2.5" mt="1.5" direction="column-reverse" space={3}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 12222
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 23333
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: 'warmGray.50',
                fontWeight: 'medium',
              }}
              shadow={'3'}>
              Box 34444
            </Center>
          </Stack>
          <Divider />
        </VStack>
        <ScrollView horizontal>
          <Stack space={2} alignItems="center">
            <HStack>
              <Test />
              <Test />
              <Test />
            </HStack>
          </Stack>
        </ScrollView>
        <Center h="40">
          <Box mt="-32">
            <ZStack mt="3" ml={-50}>
              <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
              <Box
                bg="primary.500"
                mt="5"
                ml="5"
                size="20"
                rounded="lg"
                shadow={5}
              />
              <Box
                bg="primary.300"
                mt="10"
                ml="10"
                size="20"
                rounded="lg"
                shadow={7}
              />
            </ZStack>
          </Box>
        </Center>
        <Center h="96">
          <ZStack alignItems="center" justifyContent="center">
            <Box bg="indigo.700" size="64" rounded="lg" />
            <Box bg="indigo.500" size="48" rounded="lg" shadow={8} />
            <Box bg="indigo.300" size="32" rounded="lg" shadow={8} />
          </ZStack>
        </Center>
        <Box alignItems="center">
          <Button onPress={() => console.log('hello world')}>Click Me</Button>
        </Box>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={2}
          alignItems={{
            base: 'center',
            md: 'flex-start',
          }}>
          <Button isLoading>Button</Button>
          <Button isLoading isLoadingText="Submitting">
            Button
          </Button>
          <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
            Button
          </Button>
          <Button
            isLoading
            _loading={{
              bg: 'amber.400:alpha.70',
              _text: {
                color: 'coolGray.700',
              },
            }}
            _spinner={{
              color: 'white',
            }}
            isLoadingText="Submitting">
            Button
          </Button>
          <Button isLoading isLoadingText="Submitting" variant="outline">
            Button
          </Button>
        </Stack>
        <Box alignItems="center">
          <Pressable onPress={() => console.log("I'm Pressed")}>
            <Box
              maxW="96"
              borderWidth="1"
              borderColor="coolGray.300"
              shadow="3"
              bg="coolGray.100"
              p="5"
              rounded="8">
              <HStack alignItems="center">
                <Button>
                  <Badge
                    colorScheme="darkBlue"
                    _text={{
                      color: 'white',
                    }}
                    variant="solid"
                    rounded="4">
                    Business
                  </Badge>
                </Button>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  1 month ago
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl">
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                <Text
                  mt="2"
                  fontSize={12}
                  fontWeight="medium"
                  color="darkBlue.600">
                  Read More
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>
        <Center>
          <Alert w="90%" maxW="400" status="info" colorScheme="info">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack flexShrink={1} space={2} alignItems="center">
                  <Alert.Icon />
                  <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                    We are going live in July!
                  </Text>
                </HStack>
                <IconButton
                  variant="unstyled"
                  icon={<CloseIcon size="3" color="coolGray.600" />}
                />
              </HStack>
              <Box
                pl="6"
                _text={{
                  color: 'coolGray.600',
                }}>
                We are happy to announce that we are going live on July 28th.
                Get ready!
              </Box>
            </VStack>
          </Alert>
        </Center>
        <Center w="100%">
          <HStack
            w="90%"
            maxW="400"
            borderWidth="1"
            space={8}
            rounded="md"
            _dark={{
              borderColor: 'coolGray.500',
            }}
            _light={{
              borderColor: 'coolGray.200',
            }}
            p="4">
            <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
            <VStack flex="3" space="4">
              <Skeleton startColor="amber.300" />
              <Skeleton.Text />
              <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton
                  h="3"
                  flex="1"
                  rounded="full"
                  startColor="indigo.300"
                />
              </HStack>
            </VStack>
          </HStack>
        </Center>
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      </ScrollView>
      <ScrollView>
        <Center w="100%">
          <HStack
            w="90%"
            maxW="400"
            borderWidth="1"
            space={8}
            rounded="md"
            _dark={{
              borderColor: 'coolGray.500',
            }}
            _light={{
              borderColor: 'coolGray.200',
            }}
            p="4">
            <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
            <VStack flex="3" space="4">
              <Skeleton startColor="amber.300" />
              <Skeleton.Text />
              <HStack space="2" alignItems="center">
                <Skeleton size="5" rounded="full" />
                <Skeleton h="3" flex="2" rounded="full" />
                <Skeleton
                  h="3"
                  flex="1"
                  rounded="full"
                  startColor="indigo.300"
                />
              </HStack>
            </VStack>
          </HStack>
        </Center>
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
        <Center>
          <VStack
            space={2}
            alignItems={{
              base: 'center',
              md: 'flex-start',
            }}>
            <Avatar
              bg="green.500"
              alignSelf="center"
              size="xs"
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              alignSelf="center"
              size="sm"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              HS
            </Avatar>
            <Avatar
              bg="indigo.500"
              alignSelf="center"
              size="md"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              RS
            </Avatar>
            <Avatar
              alignSelf="center"
              bg="amber.500"
              size="lg"
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              AK
            </Avatar>
            <Avatar
              bg="pink.600"
              alignSelf="center"
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
              }}>
              GG
            </Avatar>
            <Avatar
              bg="purple.600"
              alignSelf="center"
              size="2xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
              }}>
              RB
            </Avatar>
          </VStack>
        </Center>

        <Center>
          <VStack
            space={2}
            alignItems={{
              base: 'center',
              md: 'flex-start',
            }}>
            <Avatar
              bg="green.500"
              alignSelf="center"
              size="xs"
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              alignSelf="center"
              size="sm"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              HS
            </Avatar>
            <Avatar
              bg="indigo.500"
              alignSelf="center"
              size="md"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              RS
            </Avatar>
            <Avatar
              alignSelf="center"
              bg="amber.500"
              size="lg"
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              AK
            </Avatar>
            <Avatar
              bg="pink.600"
              alignSelf="center"
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
              }}>
              GG
            </Avatar>
            <Avatar
              bg="purple.600"
              alignSelf="center"
              size="2xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
              }}>
              RB
            </Avatar>
          </VStack>
        </Center>
      </ScrollView>
    </Center>
  );
};

export default NativeBase;
