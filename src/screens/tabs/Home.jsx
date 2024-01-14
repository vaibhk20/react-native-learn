import React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  FontFamily,
  FontSize,
  Border,
  Color,
} from "../../styles/GlobalStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View style={[styles.iphone13142, styles.image7IconLayout1]}>
      <View style={[styles.iphone13142Child, styles.wrapperPosition]} />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View>
          <View style={[styles.frameContainer, styles.frameSpaceBlock1]}>
            <View style={styles.vectorParent}>
              <Image style={styles.frameChild} contentFit="cover" source="" />
              <Image
                style={[styles.frameItem, styles.frameSpaceBlock]}
                contentFit="cover"
                source=""
              />
              <Image
                style={[styles.frameInner, styles.frameSpaceBlock]}
                contentFit="cover"
                source=""
              />
            </View>
            <Image
              style={styles.undefinedLayout}
              contentFit="cover"
              source=""
            />
          </View>
          <View style={[styles.welcomeParent, styles.parentSpaceBlock]}>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={[styles.viewYourApplication, styles.searchTypo]}>
              View your application status here
            </Text>
          </View>
        </View>
        <View style={styles.frameSpaceBlock1}>
          {/* <View
          style={[
            styles.searchUndefinedGlyphUnParent,
            styles.image7IconLayout,
          ]}
        >
          <Image
            style={styles.searchUndefinedGlyphUn}
            contentFit="cover"
            source=""
          />
          <Text style={[styles.search, styles.searchTypo]}>Search...</Text>
        </View> */}
          <TextInput
            style={[
              styles.searchUndefinedGlyphUnParent,
              styles.image7IconLayout,
            ]}
            placeholder="Search..."
            placeholderTextColor="#b2b2b2"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.frameView}>
          <Pressable
            style={[
              styles.documentBulletListUndefinParent,
              styles.documentParentShadowBox,
            ]}
            onPress={() => {}}
          >
            <Image
              style={styles.documentBulletListUndefin}
              contentFit="cover"
              source=""
            />
            <Text style={styles.currentGrievances}>Current Grievances</Text>
          </Pressable>
          <Pressable
            style={[
              styles.documentTableCheckmarkUndParent,
              styles.documentParentShadowBox,
            ]}
            onPress={() => {}}
          >
            <Image
              style={styles.documentBulletListUndefin}
              contentFit="cover"
              source=""
            />
            <Text style={styles.currentGrievances}>Settled Grievances</Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={[styles.component1Parent, styles.parentPosition]}>
        <Pressable style={styles.component1}>
          <Image
            style={[styles.homeUndefinedGlyphUnde, styles.undefinedLayout]}
            contentFit="cover"
            source=""
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable style={styles.component2} onPress={() => {}}>
          <Image
            style={[styles.homeUndefinedGlyphUnde, styles.undefinedLayout]}
            contentFit="cover"
            source=""
          />
          <Text style={[styles.news, styles.homeTypo]}>News</Text>
        </Pressable>
      </View>
      <View style={[styles.component3Parent, styles.parentPosition]}>
        <Pressable style={styles.component1} onPress={() => {}}>
          <Image
            style={[styles.homeUndefinedGlyphUnde, styles.undefinedLayout]}
            contentFit="cover"
            source=""
          />
          <Text style={[styles.news, styles.homeTypo]}>Social</Text>
        </Pressable>
        <Pressable style={styles.component2} onPress={() => {}}>
          <Image
            style={[styles.homeUndefinedGlyphUnde, styles.undefinedLayout]}
            contentFit="cover"
            source=""
          />
          <Text style={[styles.news, styles.homeTypo]}>FAQ</Text>
        </Pressable>
      </View> */}
      <View style={[styles.frameParent1, styles.parentSpaceBlock]}>
        <View style={styles.aboutAimimParent}>
          <Text style={[styles.aboutAimim, styles.aimimClr]}>About AIMIM</Text>
          <Text style={[styles.aimimIsA, styles.aimimClr]}>
            AIMIM is a political party dedicated to protect and promote the
            rights of Muslims, Dalits, Adivasis, Other Backward Classes, Other
            Minorities and all other underprivileged communities in India. It
            bears true faith and allegiance to the Constitution of India, The
            party strongly believes in the nation’s secular democracy
          </Text>
        </View>
        <Image
          style={[styles.image7Icon, styles.image7IconLayout]}
          contentFit="cover"
          source=""
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image7IconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  wrapperPosition: {
    left: "50%",
    position: "absolute",
  },
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },
  frameSpaceBlock1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    width: 390,
  },
  frameSpaceBlock: {
    marginTop: 8,
    maxHeight: "100%",
  },
  parentSpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    width: 390,
  },
  searchTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  image7IconLayout: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  documentParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
  },
  undefinedLayout: {
    height: 32,
    width: 32,
  },
  parentPosition: {
    top: 790,
    flexDirection: "row",
    position: "absolute",
  },
  homeTypo: {
    width: 36,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  aimimClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  iphone13142Child: {
    marginLeft: -195,
    top: 273,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 511,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    width: 24,
    maxHeight: "100%",
  },
  frameItem: {
    width: 12,
  },
  frameInner: {
    width: 24,
  },
  vectorParent: {
    paddingHorizontal: 4,
    paddingVertical: Padding.p_5xs,
  },
  frameContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  welcome: {
    fontSize: 32,
    fontFamily: FontFamily.manropeBold,
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  viewYourApplication: {
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  welcomeParent: {
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
  },
  searchUndefinedGlyphUn: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  search: {
    color: "#b2b2b2",
    marginLeft: 8,
  },
  searchUndefinedGlyphUnParent: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  documentBulletListUndefin: {
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  currentGrievances: {
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
    marginTop: 8,
  },
  documentBulletListUndefinParent: {
    borderRadius: Border.br_base,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  documentTableCheckmarkUndParent: {
    marginLeft: 24,
    borderRadius: Border.br_base,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  frameView: {
    padding: Padding.p_5xl,
    flexDirection: "row",
    width: 390,
  },
  frameParent: {
    top: 0,
  },
  frameChild1: {
    width: 60,
    height: 60,
    zIndex: 0,
  },
  addUndefinedGlyphUndef: {
    marginTop: -16,
    marginLeft: -16,
    top: "50%",
    zIndex: 1,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  pressable: {
    marginLeft: -38,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "rgba(0, 184, 116, 0.1)",
    borderWidth: 1,
    padding: Padding.p_5xs,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  wrapper: {
    top: 745,
  },
  homeUndefinedGlyphUnde: {
    overflow: "hidden",
  },
  home: {
    color: Color.colorWhite,
  },
  component1: {
    alignItems: "center",
  },
  news: {
    color: Color.colorSeagreen,
  },
  component2: {
    marginLeft: 32,
    alignItems: "center",
  },
  component1Parent: {
    left: 24,
  },
  component3Parent: {
    left: 262,
  },
  aboutAimim: {
    fontSize: 16,
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    fontWeight: "700",
  },
  aimimIsA: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    alignSelf: "stretch",
    marginTop: 8,
  },
  aboutAimimParent: {
    alignSelf: "stretch",
  },
  image7Icon: {
    maxWidth: "100%",
    height: 187,
    marginTop: 24,
    overflow: "hidden",
    width: "100%",
  },
  frameParent1: {
    top: 383,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  iphone13142: {
    backgroundColor: "#00b874",
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});
