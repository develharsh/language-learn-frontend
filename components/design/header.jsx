import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  // ThemeIcon,
  // Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from "@mantine/core";
// import { MantineLogo } from "@mantine/ds";
import {
  useDisclosure,
  // useMediaQuery
} from "@mantine/hooks";
import {
  // IconNotification,
  // IconCode,
  // IconBook,
  // IconChartPie3,
  // IconFingerprint,
  // IconCoin,
  IconChevronDown,
} from "@tabler/icons";
import { useContext, useEffect } from "react";
import { DataContext } from "../../store/globalstate";
import { ACTIONS, sendMail } from "../../store/actions";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    // icon: ,
    title: "English",
    description: "Learn English Live, In Just 30 Days",
    course: "ENGLISH",
  },
];

export default function HeaderMegaMenu() {
  const { dispatch, state } = useContext(DataContext);
  useEffect(() => {
    emailCondition();
  }, []);
  const emailCondition = () => {
    const visitor = localStorage.getItem("visitor");
    if (!visitor) {
      localStorage.setItem("visitor", new Date().getDay());
      sendMail("visitor", "new visitor");
    } else if (new Date().getDay() !== Number(visitor)) {
      sendMail("visitor", "regular visitor");
      localStorage.setItem("visitor", new Date().getDay());
    }
  };
  const handleDemoPopup = (message) => {
    sendMail("event", message);
    dispatch({ type: ACTIONS.DEMOPOPUP, payload: !state.demoPopup });
  };
  // const isDesk = useMediaQuery("(min-width: 80rem)");
  // const isTab = useMediaQuery("(min-width: 40rem)");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Link href={`/learn/${item.course.toLowerCase()}`}>
        <a className="no-txt-decor">
          <Group noWrap align="flex-start">
            {/* <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon> */}
            <div
              onClick={() =>
                sendMail("event", `Clicked Header's ${item.title} Option`)
              }
            >
              <Text size="sm" weight={500} color="#228be6">
                {item.title}
              </Text>
              <Text size="xs" color="dimmed">
                {item.description}
              </Text>
            </div>
          </Group>
        </a>
      </Link>
    </UnstyledButton>
  ));

  return (
    <Box pb={0}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          {/* <MantineLogo size={30} /> */}
          <Link href="/">
            <a className="no-txt-decor">
              <img
                src="/assets/logo.png"
                alt="SpeakLikePro www.speaklike.pro"
                className="header-logo"
              />
            </a>
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/learn/english">
              <a
                className={classes.link}
                onClick={() =>
                  sendMail(
                    "event",
                    "Clicked Header For Desktop's Learn English Button"
                  )
                }
              >
                Learn English
              </a>
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box
                      component="span"
                      mr={5}
                      onClick={() =>
                        sendMail(
                          "event",
                          "Clicked Header for Desktop's Languages Button"
                        )
                      }
                    >
                      Languages
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Languages</Text>
                  {/* <Anchor href="#" size="xs">
                    View all
                  </Anchor> */}
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                {/* <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div> */}
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="/about-us">
              <a
                className={classes.link}
                onClick={() =>
                  sendMail(
                    "event",
                    "Clicked Header for Desktop's About Us Button"
                  )
                }
              >
                About Us
              </a>
            </Link>
            {/* <a href="#" className={classes.link}>
              Our Team
            </a> */}
          </Group>

          <Group className={classes.hiddenMobile}>
            {/* <Button variant="default">Log in</Button> */}
            <Button
              onClick={() =>
                handleDemoPopup(
                  "Clicked Header for Desktop's FREE DEMO English Button"
                )
              }
            >
              Free Demo of English Class
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        // zIndex={1}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Link href="/learn/english">
            <a
              className={classes.link}
              onClick={() =>
                sendMail(
                  "event",
                  "Clicked Header for Mobile's Learn English Button"
                )
              }
            >
              Learn English
            </a>
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box
                component="span"
                mr={5}
                onClick={() =>
                  sendMail(
                    "event",
                    "Clicked Header for Mobile's Languages Button"
                  )
                }
              >
                Languages
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href="/about-us">
            <a
              className={classes.link}
              onClick={() =>
                sendMail("event", "Clicked Header for Mobile's About Us Button")
              }
            >
              About Us
            </a>
          </Link>
          {/* <a href="#" className={classes.link}>
            Academy
          </a> */}

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            {/* <Button variant="default">Log in</Button> */}
            <Button
              onClick={() =>
                handleDemoPopup(
                  "Clicked Header for Desktop's FREE DEMO English Button"
                )
              }
            >
              Free Demo of English Class
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
