export declare type TypesaurusSettings = {
  /**
   * If Typesaurus shall convert any `undefined` values in write operations to `null`.
   *
   * If `false`, the `undefined` behavior is handled by
   * [Firestore `ignoreUndefinedProperties` setting](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Settings#ignoreundefinedproperties).
   * You can change it via `firebase.firestore().settings({ignoreUndefinedProperties: value})`, in Node env.
   * @default true
   */
  undefinedToNull: boolean
}
export declare const Settings: TypesaurusSettings
/** Allows changing settings of Typesaurus. */
export declare function typesaurusSettings(
  settings: Partial<TypesaurusSettings>
): void
