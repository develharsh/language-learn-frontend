// import React from "react";
import Seo from "../components/seo";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconBrandWhatsapp, IconCheck } from "@tabler/icons";
import image from "../public/assets/home-first.svg";
// import { useContext } from "react";
// import { DataContext } from "../store/globalstate";
import Link from "next/link";
import {
  // ACTIONS,
  sendMail,
} from "../store/actions";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    color: "#2700ff",
  },
}));

const Home = () => {
  // const { dispatch, state } = useContext(DataContext);
  const isDesk = useMediaQuery("(min-width: 80rem)");
  const isTab = useMediaQuery("(min-width: 40rem)");
  // const handleDemoPopup = () => {
  //   sendMail("event", "Clicked HomePage's Register for Demo Button");
  //   dispatch({ type: ACTIONS.DEMOPOPUP, payload: !state.demoPopup });
  // };
  return (
    <>
      <Seo title="SpeakLikePro - Learn English Language, in Just 30 Days" />
      <Comp1 isDesk={isDesk} isTab={isTab} />
    </>
  );
};

const Comp1 = ({ isDesk, isTab }) => {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Learn <span className={classes.highlight}>English </span>
              in just
              <br />
              30 Days
            </Title>
            <Text color="dimmed" mt="md">
              Join Our Live Classes, and learn any language by just spending
              your 40 mins a day.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Live</b> – no pre-recorded lectures, we teach you live, with
                full of interactions.
              </List.Item>
              <List.Item>
                <b>Fundamentals</b> – learn from scratch, by getting your
                fundamentals clear.
              </List.Item>
              <List.Item>
                <b>Community</b> – join community of learners like you,
                interact, learn, &amp; have fun with them.
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="/learn/english">
                <a
                  style={
                    isDesk || isTab
                      ? { width: "fit-content" }
                      : { width: "100%" }
                  }
                >
                  <Button
                    sx={{ width: "100%" }}
                    radius="xl"
                    size="md"
                    className={classes.control}
                    onClick={() =>
                      sendMail(
                        "event",
                        "Clicked HomePage's View English Course Details Button"
                      )
                    }
                  >
                    View Course Details
                  </Button>
                </a>
              </Link>
              <Link href="https://wa.me/+917668462359">
                <a
                  target={"_blank"}
                  style={
                    isDesk || isTab
                      ? { width: "fit-content" }
                      : { width: "100%" }
                  }
                >
                  <Button
                    sx={{ width: "100%" }}
                    leftIcon={<IconBrandWhatsapp />}
                    color="green"
                    radius="xl"
                    size="md"
                    className={classes.control}
                    onClick={() =>
                      sendMail("event", "Clicked HomePage's Ask More Button")
                    }
                  >
                    Ask More
                  </Button>
                </a>
              </Link>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
