import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  //=== CSS FOR HOME SCREEN ===//
  homeContainer: {
    // backgroundColor:'red',
    padding: 10,
    flex: 1,
  },
  homeQuoteContainer: {
    backgroundColor: 'pink',
    marginBottom: 10,
    padding: 10,
  },
  homeTotalCount: {
    backgroundColor: 'green',
    padding: 10,
    flex: 1,
  },

  //=== END OF HOME SCREEN ===//

  //=== CSS FOR SKILL SCREEN ===//
  skillBody: {},
  skillContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 20,
    backgroundColor: '#008080',
    borderRadius: 5,
    borderColor: 'black',
    borderStyle: 'dashed',
    marginBottom: 5, 
  },
  skillItem: {
    fontSize: 20,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
  },
  skillButtonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginHorizontal: 15
  },
  skillButton: {
    marginRight: 10,
  },
  skillAddButtonContainer: {
    marginTop: 20,
    marginRight: 15,
  },
  skillAddButtonHolder: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  skillAddButtonText: {
    fontSize: 20
  },
  skillAddButtonIcon: {
    marginRight: 5,
  },
  skillForm: {
    marginHorizontal: 20,
    marginTop: 10
  },
  skillInputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  //=== END OF SKILL SCREEN ===//

  //=== CSS FOR EXPERIENCE SCREEN ===//
  experienceBody: {
    padding: 10,
    flex: 1,
    backgroundColor: 'red',
  },
  //=== END OF EXPERIENCE SCREEN ===//

  //=== CSS FOR PROJECT SCREEN ===//
  projectBody: {
    padding: 10,
    flex: 1,
    backgroundColor: 'red',
  },
  //=== END OF PROJECT SCREEN ===//

});