/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model doctor
 *
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>;
/**
 * Model hospital
 *
 */
export type hospital = $Result.DefaultSelection<Prisma.$hospitalPayload>;
/**
 * Model medical_record
 *
 */
export type medical_record = $Result.DefaultSelection<Prisma.$medical_recordPayload>;
/**
 * Model patient
 *
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   */
  get doctor(): Prisma.doctorDelegate<ExtArgs>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **hospital** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hospitals
   * const hospitals = await prisma.hospital.findMany()
   * ```
   */
  get hospital(): Prisma.hospitalDelegate<ExtArgs>;

  /**
   * `prisma.medical_record`: Exposes CRUD operations for the **medical_record** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Medical_records
   * const medical_records = await prisma.medical_record.findMany()
   * ```
   */
  get medical_record(): Prisma.medical_recordDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   */
  get patient(): Prisma.patientDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    doctor: 'doctor';
    hospital: 'hospital';
    medical_record: 'medical_record';
    patient: 'patient';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'doctor' | 'hospital' | 'medical_record' | 'patient' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>;
        fields: Prisma.doctorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[];
          };
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDoctor>;
          };
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DoctorGroupByOutputType>[];
          };
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>;
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number;
          };
        };
      };
      hospital: {
        payload: Prisma.$hospitalPayload<ExtArgs>;
        fields: Prisma.hospitalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.hospitalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.hospitalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          findFirst: {
            args: Prisma.hospitalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.hospitalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          findMany: {
            args: Prisma.hospitalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>[];
          };
          create: {
            args: Prisma.hospitalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          createMany: {
            args: Prisma.hospitalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.hospitalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          update: {
            args: Prisma.hospitalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          deleteMany: {
            args: Prisma.hospitalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.hospitalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.hospitalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHospital>;
          };
          groupBy: {
            args: Prisma.hospitalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HospitalGroupByOutputType>[];
          };
          count: {
            args: Prisma.hospitalCountArgs<ExtArgs>;
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number;
          };
        };
      };
      medical_record: {
        payload: Prisma.$medical_recordPayload<ExtArgs>;
        fields: Prisma.medical_recordFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.medical_recordFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.medical_recordFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          findFirst: {
            args: Prisma.medical_recordFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.medical_recordFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          findMany: {
            args: Prisma.medical_recordFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>[];
          };
          create: {
            args: Prisma.medical_recordCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          createMany: {
            args: Prisma.medical_recordCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.medical_recordDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          update: {
            args: Prisma.medical_recordUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          deleteMany: {
            args: Prisma.medical_recordDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.medical_recordUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.medical_recordUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          aggregate: {
            args: Prisma.Medical_recordAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMedical_record>;
          };
          groupBy: {
            args: Prisma.medical_recordGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Medical_recordGroupByOutputType>[];
          };
          count: {
            args: Prisma.medical_recordCountArgs<ExtArgs>;
            result: $Utils.Optional<Medical_recordCountAggregateOutputType> | number;
          };
        };
      };
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>;
        fields: Prisma.patientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[];
          };
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePatient>;
          };
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PatientGroupByOutputType>[];
          };
          count: {
            args: Prisma.patientCountArgs<ExtArgs>;
            result: $Utils.Optional<PatientCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointment: number;
    medical_record: number;
  };

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | DoctorCountOutputTypeCountAppointmentArgs;
    medical_record?: boolean | DoctorCountOutputTypeCountMedical_recordArgs;
  };

  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountMedical_recordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointment: number;
    medical_record: number;
  };

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | PatientCountOutputTypeCountAppointmentArgs;
    medical_record?: boolean | PatientCountOutputTypeCountMedical_recordArgs;
  };

  // Custom InputTypes

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedical_recordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointment: number;
    doctor: number;
    medical_record: number;
    patient: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | UserCountOutputTypeCountAppointmentArgs;
    doctor?: boolean | UserCountOutputTypeCountDoctorArgs;
    medical_record?: boolean | UserCountOutputTypeCountMedical_recordArgs;
    patient?: boolean | UserCountOutputTypeCountPatientArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedical_recordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: patientWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    appointment_date: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    appointment_date: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    appointment_date: number;
    patient_id: number;
    doctor_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    appointment_date?: true;
    patient_id?: true;
    doctor_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    appointment_date?: true;
    patient_id?: true;
    doctor_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    appointment_date?: true;
    patient_id?: true;
    doctor_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    appointment_date: Date;
    patient_id: string;
    doctor_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        appointment_date?: boolean;
        patient_id?: boolean;
        doctor_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        doctor?: boolean | doctorDefaultArgs<ExtArgs>;
        patient?: boolean | patientDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    appointment_date?: boolean;
    patient_id?: boolean;
    doctor_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | doctorDefaultArgs<ExtArgs>;
    patient?: boolean | patientDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs>;
      patient: Prisma.$patientPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        appointment_date: Date;
        patient_id: string;
        doctor_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, doctorDefaultArgs<ExtArgs>>,
    ): Prisma__doctorClient<
      $Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    patient<T extends patientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, patientDefaultArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly appointment_date: FieldRef<'appointment', 'DateTime'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly doctor_id: FieldRef<'appointment', 'String'>;
    readonly user_id: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
  };

  export type DoctorMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    specialization: string | null;
    contact_number: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DoctorMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    specialization: string | null;
    contact_number: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DoctorCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    specialization: number;
    contact_number: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DoctorMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    specialization?: true;
    contact_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DoctorMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    specialization?: true;
    contact_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DoctorCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    specialization?: true;
    contact_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned doctors
     **/
    _count?: true | DoctorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DoctorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DoctorMaxAggregateInputType;
  };

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>;
  };

  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput;
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[];
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum;
    having?: doctorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorCountAggregateInputType | true;
    _min?: DoctorMinAggregateInputType;
    _max?: DoctorMaxAggregateInputType;
  };

  export type DoctorGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DoctorCountAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
  };

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DoctorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
          : GetScalarType<T[P], DoctorGroupByOutputType[P]>;
      }
    >
  >;

  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      specialization?: boolean;
      contact_number?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | doctor$appointmentArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      medical_record?: boolean | doctor$medical_recordArgs<ExtArgs>;
      _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['doctor']
  >;

  export type doctorSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    specialization?: boolean;
    contact_number?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | doctor$appointmentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    medical_record?: boolean | doctor$medical_recordArgs<ExtArgs>;
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'doctor';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      medical_record: Prisma.$medical_recordPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        specialization: string;
        contact_number: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['doctor']
    >;
    composites: {};
  };

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<
    Prisma.$doctorPayload,
    S
  >;

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    doctorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DoctorCountAggregateInputType | true;
  };

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor']; meta: { name: 'doctor' } };
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends doctorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends doctorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     *
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends doctorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     *
     **/
    create<T extends doctorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorCreateArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Doctors.
     *     @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends doctorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     *
     **/
    delete<T extends doctorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends doctorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends doctorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends doctorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     **/
    upsert<T extends doctorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
     **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DoctorAggregateArgs>(
      args: Subset<T, DoctorAggregateArgs>,
    ): Prisma.PrismaPromise<GetDoctorAggregateType<T>>;

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the doctor model
     */
    readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends doctor$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, doctor$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    medical_record<T extends doctor$medical_recordArgs<ExtArgs> = {}>(
      args?: Subset<T, doctor$medical_recordArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the doctor model
   */
  interface doctorFieldRefs {
    readonly id: FieldRef<'doctor', 'String'>;
    readonly first_name: FieldRef<'doctor', 'String'>;
    readonly last_name: FieldRef<'doctor', 'String'>;
    readonly specialization: FieldRef<'doctor', 'String'>;
    readonly contact_number: FieldRef<'doctor', 'String'>;
    readonly user_id: FieldRef<'doctor', 'String'>;
    readonly created_at: FieldRef<'doctor', 'DateTime'>;
    readonly updated_at: FieldRef<'doctor', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The data needed to create a doctor.
     */
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>;
  };

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>;
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>;
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput;
  };

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput;
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>;
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>;
  };

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput;
  };

  /**
   * doctor.appointment
   */
  export type doctor$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * doctor.medical_record
   */
  export type doctor$medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
  };

  /**
   * Model hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null;
    _min: HospitalMinAggregateOutputType | null;
    _max: HospitalMaxAggregateOutputType | null;
  };

  export type HospitalMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    opening_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type HospitalMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    opening_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type HospitalCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    contact_number: number;
    opening_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type HospitalMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type HospitalMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type HospitalCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    contact_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospital to aggregate.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned hospitals
     **/
    _count?: true | HospitalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HospitalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HospitalMaxAggregateInputType;
  };

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
    [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>;
  };

  export type hospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalWhereInput;
    orderBy?: hospitalOrderByWithAggregationInput | hospitalOrderByWithAggregationInput[];
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum;
    having?: hospitalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalCountAggregateInputType | true;
    _min?: HospitalMinAggregateInputType;
    _max?: HospitalMaxAggregateInputType;
  };

  export type HospitalGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    contact_number: string | null;
    opening_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: HospitalCountAggregateOutputType | null;
    _min: HospitalMinAggregateOutputType | null;
    _max: HospitalMaxAggregateOutputType | null;
  };

  type GetHospitalGroupByPayload<T extends hospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HospitalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
          : GetScalarType<T[P], HospitalGroupByOutputType[P]>;
      }
    >
  >;

  export type hospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        location?: boolean;
        contact_number?: boolean;
        opening_hours?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tenant_id?: boolean;
      },
      ExtArgs['result']['hospital']
    >;

  export type hospitalSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    contact_number?: boolean;
    opening_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type $hospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'hospital';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        contact_number: string | null;
        opening_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['hospital']
    >;
    composites: {};
  };

  type hospitalGetPayload<S extends boolean | null | undefined | hospitalDefaultArgs> = $Result.GetResult<
    Prisma.$hospitalPayload,
    S
  >;

  type hospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    hospitalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: HospitalCountAggregateInputType | true;
  };

  export interface hospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hospital']; meta: { name: 'hospital' } };
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {hospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends hospitalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalFindUniqueArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Hospital that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {hospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends hospitalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends hospitalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindFirstArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends hospitalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     *
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends hospitalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Hospital.
     * @param {hospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     *
     **/
    create<T extends hospitalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalCreateArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Hospitals.
     *     @param {hospitalCreateManyArgs} args - Arguments to create many Hospitals.
     *     @example
     *     // Create many Hospitals
     *     const hospital = await prisma.hospital.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends hospitalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Hospital.
     * @param {hospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     *
     **/
    delete<T extends hospitalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalDeleteArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Hospital.
     * @param {hospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends hospitalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalUpdateArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Hospitals.
     * @param {hospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends hospitalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends hospitalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Hospital.
     * @param {hospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     **/
    upsert<T extends hospitalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalUpsertArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
     **/
    count<T extends hospitalCountArgs>(
      args?: Subset<T, hospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HospitalAggregateArgs>(
      args: Subset<T, HospitalAggregateArgs>,
    ): Prisma.PrismaPromise<GetHospitalAggregateType<T>>;

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends hospitalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hospitalGroupByArgs['orderBy'] }
        : { orderBy?: hospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, hospitalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hospital model
     */
    readonly fields: hospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hospitalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the hospital model
   */
  interface hospitalFieldRefs {
    readonly id: FieldRef<'hospital', 'String'>;
    readonly description: FieldRef<'hospital', 'String'>;
    readonly location: FieldRef<'hospital', 'String'>;
    readonly contact_number: FieldRef<'hospital', 'String'>;
    readonly opening_hours: FieldRef<'hospital', 'String'>;
    readonly name: FieldRef<'hospital', 'String'>;
    readonly created_at: FieldRef<'hospital', 'DateTime'>;
    readonly updated_at: FieldRef<'hospital', 'DateTime'>;
    readonly tenant_id: FieldRef<'hospital', 'String'>;
  }

  // Custom InputTypes

  /**
   * hospital findUnique
   */
  export type hospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital findUniqueOrThrow
   */
  export type hospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital findFirst
   */
  export type hospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * hospital findFirstOrThrow
   */
  export type hospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * hospital findMany
   */
  export type hospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing hospitals.
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * hospital create
   */
  export type hospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * The data needed to create a hospital.
     */
    data: XOR<hospitalCreateInput, hospitalUncheckedCreateInput>;
  };

  /**
   * hospital createMany
   */
  export type hospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hospitals.
     */
    data: hospitalCreateManyInput | hospitalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hospital update
   */
  export type hospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * The data needed to update a hospital.
     */
    data: XOR<hospitalUpdateInput, hospitalUncheckedUpdateInput>;
    /**
     * Choose, which hospital to update.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital updateMany
   */
  export type hospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hospitals.
     */
    data: XOR<hospitalUpdateManyMutationInput, hospitalUncheckedUpdateManyInput>;
    /**
     * Filter which hospitals to update
     */
    where?: hospitalWhereInput;
  };

  /**
   * hospital upsert
   */
  export type hospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * The filter to search for the hospital to update in case it exists.
     */
    where: hospitalWhereUniqueInput;
    /**
     * In case the hospital found by the `where` argument doesn't exist, create a new hospital with this data.
     */
    create: XOR<hospitalCreateInput, hospitalUncheckedCreateInput>;
    /**
     * In case the hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hospitalUpdateInput, hospitalUncheckedUpdateInput>;
  };

  /**
   * hospital delete
   */
  export type hospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Filter which hospital to delete.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital deleteMany
   */
  export type hospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitals to delete
     */
    where?: hospitalWhereInput;
  };

  /**
   * hospital without action
   */
  export type hospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
  };

  /**
   * Model medical_record
   */

  export type AggregateMedical_record = {
    _count: Medical_recordCountAggregateOutputType | null;
    _min: Medical_recordMinAggregateOutputType | null;
    _max: Medical_recordMaxAggregateOutputType | null;
  };

  export type Medical_recordMinAggregateOutputType = {
    id: string | null;
    patient_id: string | null;
    doctor_id: string | null;
    diagnosis: string | null;
    prescription: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_recordMaxAggregateOutputType = {
    id: string | null;
    patient_id: string | null;
    doctor_id: string | null;
    diagnosis: string | null;
    prescription: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_recordCountAggregateOutputType = {
    id: number;
    patient_id: number;
    doctor_id: number;
    diagnosis: number;
    prescription: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Medical_recordMinAggregateInputType = {
    id?: true;
    patient_id?: true;
    doctor_id?: true;
    diagnosis?: true;
    prescription?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_recordMaxAggregateInputType = {
    id?: true;
    patient_id?: true;
    doctor_id?: true;
    diagnosis?: true;
    prescription?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_recordCountAggregateInputType = {
    id?: true;
    patient_id?: true;
    doctor_id?: true;
    diagnosis?: true;
    prescription?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Medical_recordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_record to aggregate.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned medical_records
     **/
    _count?: true | Medical_recordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Medical_recordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Medical_recordMaxAggregateInputType;
  };

  export type GetMedical_recordAggregateType<T extends Medical_recordAggregateArgs> = {
    [P in keyof T & keyof AggregateMedical_record]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical_record[P]>
      : GetScalarType<T[P], AggregateMedical_record[P]>;
  };

  export type medical_recordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithAggregationInput | medical_recordOrderByWithAggregationInput[];
    by: Medical_recordScalarFieldEnum[] | Medical_recordScalarFieldEnum;
    having?: medical_recordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Medical_recordCountAggregateInputType | true;
    _min?: Medical_recordMinAggregateInputType;
    _max?: Medical_recordMaxAggregateInputType;
  };

  export type Medical_recordGroupByOutputType = {
    id: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Medical_recordCountAggregateOutputType | null;
    _min: Medical_recordMinAggregateOutputType | null;
    _max: Medical_recordMaxAggregateOutputType | null;
  };

  type GetMedical_recordGroupByPayload<T extends medical_recordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medical_recordGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Medical_recordGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Medical_recordGroupByOutputType[P]>
          : GetScalarType<T[P], Medical_recordGroupByOutputType[P]>;
      }
    >
  >;

  export type medical_recordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        patient_id?: boolean;
        doctor_id?: boolean;
        diagnosis?: boolean;
        prescription?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        doctor?: boolean | doctorDefaultArgs<ExtArgs>;
        patient?: boolean | patientDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['medical_record']
    >;

  export type medical_recordSelectScalar = {
    id?: boolean;
    patient_id?: boolean;
    doctor_id?: boolean;
    diagnosis?: boolean;
    prescription?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type medical_recordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | doctorDefaultArgs<ExtArgs>;
    patient?: boolean | patientDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $medical_recordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'medical_record';
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs>;
      patient: Prisma.$patientPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        patient_id: string;
        doctor_id: string;
        diagnosis: string;
        prescription: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['medical_record']
    >;
    composites: {};
  };

  type medical_recordGetPayload<S extends boolean | null | undefined | medical_recordDefaultArgs> = $Result.GetResult<
    Prisma.$medical_recordPayload,
    S
  >;

  type medical_recordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    medical_recordFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Medical_recordCountAggregateInputType | true;
  };

  export interface medical_recordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medical_record']; meta: { name: 'medical_record' } };
    /**
     * Find zero or one Medical_record that matches the filter.
     * @param {medical_recordFindUniqueArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends medical_recordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordFindUniqueArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Medical_record that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {medical_recordFindUniqueOrThrowArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends medical_recordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Medical_record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindFirstArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends medical_recordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindFirstArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Medical_record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindFirstOrThrowArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends medical_recordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Medical_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medical_records
     * const medical_records = await prisma.medical_record.findMany()
     *
     * // Get first 10 Medical_records
     * const medical_records = await prisma.medical_record.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medical_recordWithIdOnly = await prisma.medical_record.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends medical_recordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Medical_record.
     * @param {medical_recordCreateArgs} args - Arguments to create a Medical_record.
     * @example
     * // Create one Medical_record
     * const Medical_record = await prisma.medical_record.create({
     *   data: {
     *     // ... data to create a Medical_record
     *   }
     * })
     *
     **/
    create<T extends medical_recordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordCreateArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Medical_records.
     *     @param {medical_recordCreateManyArgs} args - Arguments to create many Medical_records.
     *     @example
     *     // Create many Medical_records
     *     const medical_record = await prisma.medical_record.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends medical_recordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Medical_record.
     * @param {medical_recordDeleteArgs} args - Arguments to delete one Medical_record.
     * @example
     * // Delete one Medical_record
     * const Medical_record = await prisma.medical_record.delete({
     *   where: {
     *     // ... filter to delete one Medical_record
     *   }
     * })
     *
     **/
    delete<T extends medical_recordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordDeleteArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Medical_record.
     * @param {medical_recordUpdateArgs} args - Arguments to update one Medical_record.
     * @example
     * // Update one Medical_record
     * const medical_record = await prisma.medical_record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends medical_recordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpdateArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Medical_records.
     * @param {medical_recordDeleteManyArgs} args - Arguments to filter Medical_records to delete.
     * @example
     * // Delete a few Medical_records
     * const { count } = await prisma.medical_record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends medical_recordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Medical_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medical_records
     * const medical_record = await prisma.medical_record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends medical_recordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Medical_record.
     * @param {medical_recordUpsertArgs} args - Arguments to update or create a Medical_record.
     * @example
     * // Update or create a Medical_record
     * const medical_record = await prisma.medical_record.upsert({
     *   create: {
     *     // ... data to create a Medical_record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical_record we want to update
     *   }
     * })
     **/
    upsert<T extends medical_recordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpsertArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Medical_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordCountArgs} args - Arguments to filter Medical_records to count.
     * @example
     * // Count the number of Medical_records
     * const count = await prisma.medical_record.count({
     *   where: {
     *     // ... the filter for the Medical_records we want to count
     *   }
     * })
     **/
    count<T extends medical_recordCountArgs>(
      args?: Subset<T, medical_recordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medical_recordCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Medical_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medical_recordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Medical_recordAggregateArgs>(
      args: Subset<T, Medical_recordAggregateArgs>,
    ): Prisma.PrismaPromise<GetMedical_recordAggregateType<T>>;

    /**
     * Group by Medical_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends medical_recordGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medical_recordGroupByArgs['orderBy'] }
        : { orderBy?: medical_recordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, medical_recordGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMedical_recordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the medical_record model
     */
    readonly fields: medical_recordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medical_record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medical_recordClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, doctorDefaultArgs<ExtArgs>>,
    ): Prisma__doctorClient<
      $Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    patient<T extends patientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, patientDefaultArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the medical_record model
   */
  interface medical_recordFieldRefs {
    readonly id: FieldRef<'medical_record', 'String'>;
    readonly patient_id: FieldRef<'medical_record', 'String'>;
    readonly doctor_id: FieldRef<'medical_record', 'String'>;
    readonly diagnosis: FieldRef<'medical_record', 'String'>;
    readonly prescription: FieldRef<'medical_record', 'String'>;
    readonly user_id: FieldRef<'medical_record', 'String'>;
    readonly created_at: FieldRef<'medical_record', 'DateTime'>;
    readonly updated_at: FieldRef<'medical_record', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * medical_record findUnique
   */
  export type medical_recordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record findUniqueOrThrow
   */
  export type medical_recordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the medical_record
       */
      select?: medical_recordSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: medical_recordInclude<ExtArgs> | null;
      /**
       * Filter, which medical_record to fetch.
       */
      where: medical_recordWhereUniqueInput;
    };

  /**
   * medical_record findFirst
   */
  export type medical_recordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_records.
     */
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record findFirstOrThrow
   */
  export type medical_recordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_records.
     */
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record findMany
   */
  export type medical_recordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_records to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record create
   */
  export type medical_recordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The data needed to create a medical_record.
     */
    data: XOR<medical_recordCreateInput, medical_recordUncheckedCreateInput>;
  };

  /**
   * medical_record createMany
   */
  export type medical_recordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medical_records.
     */
    data: medical_recordCreateManyInput | medical_recordCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * medical_record update
   */
  export type medical_recordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The data needed to update a medical_record.
     */
    data: XOR<medical_recordUpdateInput, medical_recordUncheckedUpdateInput>;
    /**
     * Choose, which medical_record to update.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record updateMany
   */
  export type medical_recordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medical_records.
     */
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyInput>;
    /**
     * Filter which medical_records to update
     */
    where?: medical_recordWhereInput;
  };

  /**
   * medical_record upsert
   */
  export type medical_recordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The filter to search for the medical_record to update in case it exists.
     */
    where: medical_recordWhereUniqueInput;
    /**
     * In case the medical_record found by the `where` argument doesn't exist, create a new medical_record with this data.
     */
    create: XOR<medical_recordCreateInput, medical_recordUncheckedCreateInput>;
    /**
     * In case the medical_record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medical_recordUpdateInput, medical_recordUncheckedUpdateInput>;
  };

  /**
   * medical_record delete
   */
  export type medical_recordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter which medical_record to delete.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record deleteMany
   */
  export type medical_recordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_records to delete
     */
    where?: medical_recordWhereInput;
  };

  /**
   * medical_record without action
   */
  export type medical_recordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
  };

  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  export type PatientMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    dob: Date | null;
    gender: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    dob: Date | null;
    gender: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    dob: number;
    gender: number;
    contact_number: number;
    address: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PatientMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    dob?: true;
    gender?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    dob?: true;
    gender?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    dob?: true;
    gender?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned patients
     **/
    _count?: true | PatientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PatientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PatientMaxAggregateInputType;
  };

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>;
  };

  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput;
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[];
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum;
    having?: patientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
  };

  export type PatientGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    dob: Date;
    gender: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PatientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
          : GetScalarType<T[P], PatientGroupByOutputType[P]>;
      }
    >
  >;

  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      dob?: boolean;
      gender?: boolean;
      contact_number?: boolean;
      address?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | patient$appointmentArgs<ExtArgs>;
      medical_record?: boolean | patient$medical_recordArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['patient']
  >;

  export type patientSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    dob?: boolean;
    gender?: boolean;
    contact_number?: boolean;
    address?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | patient$appointmentArgs<ExtArgs>;
    medical_record?: boolean | patient$medical_recordArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'patient';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      medical_record: Prisma.$medical_recordPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        dob: Date;
        gender: string;
        contact_number: string;
        address: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['patient']
    >;
    composites: {};
  };

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<
    Prisma.$patientPayload,
    S
  >;

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    patientFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PatientCountAggregateInputType | true;
  };

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient']; meta: { name: 'patient' } };
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends patientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends patientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     *
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends patientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     *
     **/
    create<T extends patientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, patientCreateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Patients.
     *     @param {patientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends patientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     *
     **/
    delete<T extends patientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, patientDeleteArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends patientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends patientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends patientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     **/
    upsert<T extends patientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpsertArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
     **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PatientAggregateArgs>(
      args: Subset<T, PatientAggregateArgs>,
    ): Prisma.PrismaPromise<GetPatientAggregateType<T>>;

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the patient model
     */
    readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends patient$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, patient$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_record<T extends patient$medical_recordArgs<ExtArgs> = {}>(
      args?: Subset<T, patient$medical_recordArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<'patient', 'String'>;
    readonly first_name: FieldRef<'patient', 'String'>;
    readonly last_name: FieldRef<'patient', 'String'>;
    readonly dob: FieldRef<'patient', 'DateTime'>;
    readonly gender: FieldRef<'patient', 'String'>;
    readonly contact_number: FieldRef<'patient', 'String'>;
    readonly address: FieldRef<'patient', 'String'>;
    readonly user_id: FieldRef<'patient', 'String'>;
    readonly created_at: FieldRef<'patient', 'DateTime'>;
    readonly updated_at: FieldRef<'patient', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>;
  };

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>;
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput;
  };

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput;
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>;
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
  };

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput;
  };

  /**
   * patient.appointment
   */
  export type patient$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * patient.medical_record
   */
  export type patient$medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | user$appointmentArgs<ExtArgs>;
      doctor?: boolean | user$doctorArgs<ExtArgs>;
      medical_record?: boolean | user$medical_recordArgs<ExtArgs>;
      patient?: boolean | user$patientArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | user$appointmentArgs<ExtArgs>;
    doctor?: boolean | user$doctorArgs<ExtArgs>;
    medical_record?: boolean | user$medical_recordArgs<ExtArgs>;
    patient?: boolean | user$patientArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      doctor: Prisma.$doctorPayload<ExtArgs>[];
      medical_record: Prisma.$medical_recordPayload<ExtArgs>[];
      patient: Prisma.$patientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends user$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    doctor<T extends user$doctorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$doctorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_record<T extends user$medical_recordArgs<ExtArgs> = {}>(
      args?: Subset<T, user$medical_recordArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    patient<T extends user$patientArgs<ExtArgs> = {}>(
      args?: Subset<T, user$patientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.appointment
   */
  export type user$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * user.doctor
   */
  export type user$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    where?: doctorWhereInput;
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    cursor?: doctorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * user.medical_record
   */
  export type user$medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * user.patient
   */
  export type user$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    where?: patientWhereInput;
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    cursor?: patientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    appointment_date: 'appointment_date';
    patient_id: 'patient_id';
    doctor_id: 'doctor_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const DoctorScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    specialization: 'specialization';
    contact_number: 'contact_number';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum];

  export const HospitalScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    contact_number: 'contact_number';
    opening_hours: 'opening_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum];

  export const Medical_recordScalarFieldEnum: {
    id: 'id';
    patient_id: 'patient_id';
    doctor_id: 'doctor_id';
    diagnosis: 'diagnosis';
    prescription: 'prescription';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Medical_recordScalarFieldEnum =
    (typeof Medical_recordScalarFieldEnum)[keyof typeof Medical_recordScalarFieldEnum];

  export const PatientScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    dob: 'dob';
    gender: 'gender';
    contact_number: 'contact_number';
    address: 'address';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    user_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
    patient?: XOR<PatientRelationFilter, patientWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    doctor?: doctorOrderByWithRelationInput;
    patient?: patientOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      appointment_date?: DateTimeFilter<'appointment'> | Date | string;
      patient_id?: UuidFilter<'appointment'> | string;
      doctor_id?: UuidFilter<'appointment'> | string;
      user_id?: UuidFilter<'appointment'> | string;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
      patient?: XOR<PatientRelationFilter, patientWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    appointment_date?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    doctor_id?: UuidWithAggregatesFilter<'appointment'> | string;
    user_id?: UuidWithAggregatesFilter<'appointment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[];
    OR?: doctorWhereInput[];
    NOT?: doctorWhereInput | doctorWhereInput[];
    id?: UuidFilter<'doctor'> | string;
    first_name?: StringFilter<'doctor'> | string;
    last_name?: StringFilter<'doctor'> | string;
    specialization?: StringFilter<'doctor'> | string;
    contact_number?: StringFilter<'doctor'> | string;
    user_id?: UuidFilter<'doctor'> | string;
    created_at?: DateTimeFilter<'doctor'> | Date | string;
    updated_at?: DateTimeFilter<'doctor'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    medical_record?: Medical_recordListRelationFilter;
  };

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    medical_record?: medical_recordOrderByRelationAggregateInput;
  };

  export type doctorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: doctorWhereInput | doctorWhereInput[];
      OR?: doctorWhereInput[];
      NOT?: doctorWhereInput | doctorWhereInput[];
      first_name?: StringFilter<'doctor'> | string;
      last_name?: StringFilter<'doctor'> | string;
      specialization?: StringFilter<'doctor'> | string;
      contact_number?: StringFilter<'doctor'> | string;
      user_id?: UuidFilter<'doctor'> | string;
      created_at?: DateTimeFilter<'doctor'> | Date | string;
      updated_at?: DateTimeFilter<'doctor'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      medical_record?: Medical_recordListRelationFilter;
    },
    'id'
  >;

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: doctorCountOrderByAggregateInput;
    _max?: doctorMaxOrderByAggregateInput;
    _min?: doctorMinOrderByAggregateInput;
  };

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[];
    OR?: doctorScalarWhereWithAggregatesInput[];
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'doctor'> | string;
    first_name?: StringWithAggregatesFilter<'doctor'> | string;
    last_name?: StringWithAggregatesFilter<'doctor'> | string;
    specialization?: StringWithAggregatesFilter<'doctor'> | string;
    contact_number?: StringWithAggregatesFilter<'doctor'> | string;
    user_id?: UuidWithAggregatesFilter<'doctor'> | string;
    created_at?: DateTimeWithAggregatesFilter<'doctor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'doctor'> | Date | string;
  };

  export type hospitalWhereInput = {
    AND?: hospitalWhereInput | hospitalWhereInput[];
    OR?: hospitalWhereInput[];
    NOT?: hospitalWhereInput | hospitalWhereInput[];
    id?: UuidFilter<'hospital'> | string;
    description?: StringNullableFilter<'hospital'> | string | null;
    location?: StringNullableFilter<'hospital'> | string | null;
    contact_number?: StringNullableFilter<'hospital'> | string | null;
    opening_hours?: StringNullableFilter<'hospital'> | string | null;
    name?: StringFilter<'hospital'> | string;
    created_at?: DateTimeFilter<'hospital'> | Date | string;
    updated_at?: DateTimeFilter<'hospital'> | Date | string;
    tenant_id?: StringFilter<'hospital'> | string;
  };

  export type hospitalOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type hospitalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: hospitalWhereInput | hospitalWhereInput[];
      OR?: hospitalWhereInput[];
      NOT?: hospitalWhereInput | hospitalWhereInput[];
      description?: StringNullableFilter<'hospital'> | string | null;
      location?: StringNullableFilter<'hospital'> | string | null;
      contact_number?: StringNullableFilter<'hospital'> | string | null;
      opening_hours?: StringNullableFilter<'hospital'> | string | null;
      name?: StringFilter<'hospital'> | string;
      created_at?: DateTimeFilter<'hospital'> | Date | string;
      updated_at?: DateTimeFilter<'hospital'> | Date | string;
      tenant_id?: StringFilter<'hospital'> | string;
    },
    'id'
  >;

  export type hospitalOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: hospitalCountOrderByAggregateInput;
    _max?: hospitalMaxOrderByAggregateInput;
    _min?: hospitalMinOrderByAggregateInput;
  };

  export type hospitalScalarWhereWithAggregatesInput = {
    AND?: hospitalScalarWhereWithAggregatesInput | hospitalScalarWhereWithAggregatesInput[];
    OR?: hospitalScalarWhereWithAggregatesInput[];
    NOT?: hospitalScalarWhereWithAggregatesInput | hospitalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'hospital'> | string;
    description?: StringNullableWithAggregatesFilter<'hospital'> | string | null;
    location?: StringNullableWithAggregatesFilter<'hospital'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'hospital'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'hospital'> | string | null;
    name?: StringWithAggregatesFilter<'hospital'> | string;
    created_at?: DateTimeWithAggregatesFilter<'hospital'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'hospital'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'hospital'> | string;
  };

  export type medical_recordWhereInput = {
    AND?: medical_recordWhereInput | medical_recordWhereInput[];
    OR?: medical_recordWhereInput[];
    NOT?: medical_recordWhereInput | medical_recordWhereInput[];
    id?: UuidFilter<'medical_record'> | string;
    patient_id?: UuidFilter<'medical_record'> | string;
    doctor_id?: UuidFilter<'medical_record'> | string;
    diagnosis?: StringFilter<'medical_record'> | string;
    prescription?: StringFilter<'medical_record'> | string;
    user_id?: UuidFilter<'medical_record'> | string;
    created_at?: DateTimeFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeFilter<'medical_record'> | Date | string;
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
    patient?: XOR<PatientRelationFilter, patientWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type medical_recordOrderByWithRelationInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    doctor?: doctorOrderByWithRelationInput;
    patient?: patientOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type medical_recordWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: medical_recordWhereInput | medical_recordWhereInput[];
      OR?: medical_recordWhereInput[];
      NOT?: medical_recordWhereInput | medical_recordWhereInput[];
      patient_id?: UuidFilter<'medical_record'> | string;
      doctor_id?: UuidFilter<'medical_record'> | string;
      diagnosis?: StringFilter<'medical_record'> | string;
      prescription?: StringFilter<'medical_record'> | string;
      user_id?: UuidFilter<'medical_record'> | string;
      created_at?: DateTimeFilter<'medical_record'> | Date | string;
      updated_at?: DateTimeFilter<'medical_record'> | Date | string;
      doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
      patient?: XOR<PatientRelationFilter, patientWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type medical_recordOrderByWithAggregationInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: medical_recordCountOrderByAggregateInput;
    _max?: medical_recordMaxOrderByAggregateInput;
    _min?: medical_recordMinOrderByAggregateInput;
  };

  export type medical_recordScalarWhereWithAggregatesInput = {
    AND?: medical_recordScalarWhereWithAggregatesInput | medical_recordScalarWhereWithAggregatesInput[];
    OR?: medical_recordScalarWhereWithAggregatesInput[];
    NOT?: medical_recordScalarWhereWithAggregatesInput | medical_recordScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'medical_record'> | string;
    patient_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    doctor_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    diagnosis?: StringWithAggregatesFilter<'medical_record'> | string;
    prescription?: StringWithAggregatesFilter<'medical_record'> | string;
    user_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    created_at?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
  };

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[];
    OR?: patientWhereInput[];
    NOT?: patientWhereInput | patientWhereInput[];
    id?: UuidFilter<'patient'> | string;
    first_name?: StringFilter<'patient'> | string;
    last_name?: StringFilter<'patient'> | string;
    dob?: DateTimeFilter<'patient'> | Date | string;
    gender?: StringFilter<'patient'> | string;
    contact_number?: StringFilter<'patient'> | string;
    address?: StringFilter<'patient'> | string;
    user_id?: UuidFilter<'patient'> | string;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    medical_record?: Medical_recordListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type patientOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    dob?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    medical_record?: medical_recordOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type patientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: patientWhereInput | patientWhereInput[];
      OR?: patientWhereInput[];
      NOT?: patientWhereInput | patientWhereInput[];
      first_name?: StringFilter<'patient'> | string;
      last_name?: StringFilter<'patient'> | string;
      dob?: DateTimeFilter<'patient'> | Date | string;
      gender?: StringFilter<'patient'> | string;
      contact_number?: StringFilter<'patient'> | string;
      address?: StringFilter<'patient'> | string;
      user_id?: UuidFilter<'patient'> | string;
      created_at?: DateTimeFilter<'patient'> | Date | string;
      updated_at?: DateTimeFilter<'patient'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      medical_record?: Medical_recordListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    dob?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: patientCountOrderByAggregateInput;
    _max?: patientMaxOrderByAggregateInput;
    _min?: patientMinOrderByAggregateInput;
  };

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    OR?: patientScalarWhereWithAggregatesInput[];
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'patient'> | string;
    first_name?: StringWithAggregatesFilter<'patient'> | string;
    last_name?: StringWithAggregatesFilter<'patient'> | string;
    dob?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
    gender?: StringWithAggregatesFilter<'patient'> | string;
    contact_number?: StringWithAggregatesFilter<'patient'> | string;
    address?: StringWithAggregatesFilter<'patient'> | string;
    user_id?: UuidWithAggregatesFilter<'patient'> | string;
    created_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    doctor?: DoctorListRelationFilter;
    medical_record?: Medical_recordListRelationFilter;
    patient?: PatientListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    doctor?: doctorOrderByRelationAggregateInput;
    medical_record?: medical_recordOrderByRelationAggregateInput;
    patient?: patientOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      doctor?: DoctorListRelationFilter;
      medical_record?: Medical_recordListRelationFilter;
      patient?: PatientListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    appointment_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    patient: patientCreateNestedOneWithoutAppointmentInput;
    user: userCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    appointment_date: Date | string;
    patient_id: string;
    doctor_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
    user?: userUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    appointment_date: Date | string;
    patient_id: string;
    doctor_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type doctorCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
    user: userCreateNestedOneWithoutDoctorInput;
    medical_record?: medical_recordCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
    user?: userUpdateOneRequiredWithoutDoctorNestedInput;
    medical_record?: medical_recordUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type doctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hospitalCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type hospitalUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type hospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type hospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type hospitalCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    contact_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type hospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type hospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type medical_recordCreateInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutMedical_recordInput;
    patient: patientCreateNestedOneWithoutMedical_recordInput;
    user: userCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateInput = {
    id?: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutMedical_recordNestedInput;
    patient?: patientUpdateOneRequiredWithoutMedical_recordNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordCreateManyInput = {
    id?: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    medical_record?: medical_recordCreateNestedManyWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    medical_record?: medical_recordUpdateManyWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DoctorRelationFilter = {
    is?: doctorWhereInput;
    isNot?: doctorWhereInput;
  };

  export type PatientRelationFilter = {
    is?: patientWhereInput;
    isNot?: patientWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type Medical_recordListRelationFilter = {
    every?: medical_recordWhereInput;
    some?: medical_recordWhereInput;
    none?: medical_recordWhereInput;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type medical_recordOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type hospitalCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type hospitalMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type hospitalMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    contact_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type medical_recordCountOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordMaxOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordMinOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    dob?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    dob?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    dob?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput;
    some?: doctorWhereInput;
    none?: doctorWhereInput;
  };

  export type PatientListRelationFilter = {
    every?: patientWhereInput;
    some?: patientWhereInput;
    none?: patientWhereInput;
  };

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type patientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput;
    connect?: doctorWhereUniqueInput;
  };

  export type patientCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput;
    connect?: patientWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutAppointmentInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type doctorUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput;
    upsert?: doctorUpsertWithoutAppointmentInput;
    connect?: doctorWhereUniqueInput;
    update?: XOR<
      XOR<doctorUpdateToOneWithWhereWithoutAppointmentInput, doctorUpdateWithoutAppointmentInput>,
      doctorUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type patientUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput;
    upsert?: patientUpsertWithoutAppointmentInput;
    connect?: patientWhereUniqueInput;
    update?: XOR<
      XOR<patientUpdateToOneWithWhereWithoutAppointmentInput, patientUpdateWithoutAppointmentInput>,
      patientUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutAppointmentInput;
    upsert?: userUpsertWithoutAppointmentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAppointmentInput, userUpdateWithoutAppointmentInput>,
      userUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type appointmentCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutDoctorInput = {
    create?: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
    connectOrCreate?: userCreateOrConnectWithoutDoctorInput;
    connect?: userWhereUniqueInput;
  };

  export type medical_recordCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<medical_recordCreateWithoutDoctorInput, medical_recordUncheckedCreateWithoutDoctorInput>
      | medical_recordCreateWithoutDoctorInput[]
      | medical_recordUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutDoctorInput
      | medical_recordCreateOrConnectWithoutDoctorInput[];
    createMany?: medical_recordCreateManyDoctorInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<medical_recordCreateWithoutDoctorInput, medical_recordUncheckedCreateWithoutDoctorInput>
      | medical_recordCreateWithoutDoctorInput[]
      | medical_recordUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutDoctorInput
      | medical_recordCreateOrConnectWithoutDoctorInput[];
    createMany?: medical_recordCreateManyDoctorInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
    connectOrCreate?: userCreateOrConnectWithoutDoctorInput;
    upsert?: userUpsertWithoutDoctorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutDoctorInput, userUpdateWithoutDoctorInput>,
      userUncheckedUpdateWithoutDoctorInput
    >;
  };

  export type medical_recordUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutDoctorInput, medical_recordUncheckedCreateWithoutDoctorInput>
      | medical_recordCreateWithoutDoctorInput[]
      | medical_recordUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutDoctorInput
      | medical_recordCreateOrConnectWithoutDoctorInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutDoctorInput
      | medical_recordUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: medical_recordCreateManyDoctorInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutDoctorInput
      | medical_recordUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutDoctorInput
      | medical_recordUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutDoctorInput, medical_recordUncheckedCreateWithoutDoctorInput>
      | medical_recordCreateWithoutDoctorInput[]
      | medical_recordUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutDoctorInput
      | medical_recordCreateOrConnectWithoutDoctorInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutDoctorInput
      | medical_recordUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: medical_recordCreateManyDoctorInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutDoctorInput
      | medical_recordUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutDoctorInput
      | medical_recordUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type doctorCreateNestedOneWithoutMedical_recordInput = {
    create?: XOR<doctorCreateWithoutMedical_recordInput, doctorUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutMedical_recordInput;
    connect?: doctorWhereUniqueInput;
  };

  export type patientCreateNestedOneWithoutMedical_recordInput = {
    create?: XOR<patientCreateWithoutMedical_recordInput, patientUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: patientCreateOrConnectWithoutMedical_recordInput;
    connect?: patientWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutMedical_recordInput = {
    create?: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_recordInput;
    connect?: userWhereUniqueInput;
  };

  export type doctorUpdateOneRequiredWithoutMedical_recordNestedInput = {
    create?: XOR<doctorCreateWithoutMedical_recordInput, doctorUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutMedical_recordInput;
    upsert?: doctorUpsertWithoutMedical_recordInput;
    connect?: doctorWhereUniqueInput;
    update?: XOR<
      XOR<doctorUpdateToOneWithWhereWithoutMedical_recordInput, doctorUpdateWithoutMedical_recordInput>,
      doctorUncheckedUpdateWithoutMedical_recordInput
    >;
  };

  export type patientUpdateOneRequiredWithoutMedical_recordNestedInput = {
    create?: XOR<patientCreateWithoutMedical_recordInput, patientUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: patientCreateOrConnectWithoutMedical_recordInput;
    upsert?: patientUpsertWithoutMedical_recordInput;
    connect?: patientWhereUniqueInput;
    update?: XOR<
      XOR<patientUpdateToOneWithWhereWithoutMedical_recordInput, patientUpdateWithoutMedical_recordInput>,
      patientUncheckedUpdateWithoutMedical_recordInput
    >;
  };

  export type userUpdateOneRequiredWithoutMedical_recordNestedInput = {
    create?: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_recordInput;
    upsert?: userUpsertWithoutMedical_recordInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMedical_recordInput, userUpdateWithoutMedical_recordInput>,
      userUncheckedUpdateWithoutMedical_recordInput
    >;
  };

  export type appointmentCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type medical_recordCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<medical_recordCreateWithoutPatientInput, medical_recordUncheckedCreateWithoutPatientInput>
      | medical_recordCreateWithoutPatientInput[]
      | medical_recordUncheckedCreateWithoutPatientInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutPatientInput
      | medical_recordCreateOrConnectWithoutPatientInput[];
    createMany?: medical_recordCreateManyPatientInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutPatientInput = {
    create?: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: userCreateOrConnectWithoutPatientInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<medical_recordCreateWithoutPatientInput, medical_recordUncheckedCreateWithoutPatientInput>
      | medical_recordCreateWithoutPatientInput[]
      | medical_recordUncheckedCreateWithoutPatientInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutPatientInput
      | medical_recordCreateOrConnectWithoutPatientInput[];
    createMany?: medical_recordCreateManyPatientInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutPatientInput
      | appointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutPatientInput
      | appointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutPatientInput
      | appointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type medical_recordUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutPatientInput, medical_recordUncheckedCreateWithoutPatientInput>
      | medical_recordCreateWithoutPatientInput[]
      | medical_recordUncheckedCreateWithoutPatientInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutPatientInput
      | medical_recordCreateOrConnectWithoutPatientInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutPatientInput
      | medical_recordUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: medical_recordCreateManyPatientInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutPatientInput
      | medical_recordUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutPatientInput
      | medical_recordUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: userCreateOrConnectWithoutPatientInput;
    upsert?: userUpsertWithoutPatientInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPatientInput, userUpdateWithoutPatientInput>,
      userUncheckedUpdateWithoutPatientInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutPatientInput
      | appointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutPatientInput
      | appointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutPatientInput
      | appointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutPatientInput, medical_recordUncheckedCreateWithoutPatientInput>
      | medical_recordCreateWithoutPatientInput[]
      | medical_recordUncheckedCreateWithoutPatientInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutPatientInput
      | medical_recordCreateOrConnectWithoutPatientInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutPatientInput
      | medical_recordUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: medical_recordCreateManyPatientInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutPatientInput
      | medical_recordUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutPatientInput
      | medical_recordUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type doctorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
  };

  export type medical_recordCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type patientCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type doctorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type patientUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutUserInput | appointmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutUserInput | appointmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutUserInput | appointmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type doctorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    upsert?: doctorUpsertWithWhereUniqueWithoutUserInput | doctorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    update?: doctorUpdateWithWhereUniqueWithoutUserInput | doctorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: doctorUpdateManyWithWhereWithoutUserInput | doctorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[];
  };

  export type medical_recordUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUserInput
      | medical_recordUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUserInput
      | medical_recordUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUserInput
      | medical_recordUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type patientUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutUserInput | patientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutUserInput | patientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: patientUpdateManyWithWhereWithoutUserInput | patientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>
      | appointmentCreateWithoutUserInput[]
      | appointmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutUserInput | appointmentCreateOrConnectWithoutUserInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutUserInput | appointmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: appointmentCreateManyUserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutUserInput | appointmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutUserInput | appointmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type doctorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>
      | doctorCreateWithoutUserInput[]
      | doctorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutUserInput | doctorCreateOrConnectWithoutUserInput[];
    upsert?: doctorUpsertWithWhereUniqueWithoutUserInput | doctorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: doctorCreateManyUserInputEnvelope;
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    update?: doctorUpdateWithWhereUniqueWithoutUserInput | doctorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: doctorUpdateManyWithWhereWithoutUserInput | doctorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUserInput
      | medical_recordUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUserInput
      | medical_recordUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUserInput
      | medical_recordUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type patientUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutUserInput | patientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutUserInput | patientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: patientUpdateManyWithWhereWithoutUserInput | patientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type doctorCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDoctorInput;
    medical_record?: medical_recordCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorCreateOrConnectWithoutAppointmentInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
  };

  export type patientCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    medical_record?: medical_recordCreateNestedManyWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutAppointmentInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
  };

  export type userCreateWithoutAppointmentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppointmentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
  };

  export type doctorUpsertWithoutAppointmentInput = {
    update: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    where?: doctorWhereInput;
  };

  export type doctorUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: doctorWhereInput;
    data: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>;
  };

  export type doctorUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDoctorNestedInput;
    medical_record?: medical_recordUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    medical_record?: medical_recordUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type patientUpsertWithoutAppointmentInput = {
    update: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    where?: patientWhereInput;
  };

  export type patientUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: patientWhereInput;
    data: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>;
  };

  export type patientUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    medical_record?: medical_recordUpdateManyWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    medical_record?: medical_recordUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type userUpsertWithoutAppointmentInput = {
    update: XOR<userUpdateWithoutAppointmentInput, userUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<userCreateWithoutAppointmentInput, userUncheckedCreateWithoutAppointmentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAppointmentInput, userUncheckedUpdateWithoutAppointmentInput>;
  };

  export type userUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutDoctorInput = {
    id?: string;
    appointment_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient: patientCreateNestedOneWithoutAppointmentInput;
    user: userCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutDoctorInput = {
    id?: string;
    appointment_date: Date | string;
    patient_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentCreateManyDoctorInputEnvelope = {
    data: appointmentCreateManyDoctorInput | appointmentCreateManyDoctorInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutDoctorInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDoctorInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDoctorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
  };

  export type medical_recordCreateWithoutDoctorInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient: patientCreateNestedOneWithoutMedical_recordInput;
    user: userCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateWithoutDoctorInput = {
    id?: string;
    patient_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutDoctorInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<medical_recordCreateWithoutDoctorInput, medical_recordUncheckedCreateWithoutDoctorInput>;
  };

  export type medical_recordCreateManyDoctorInputEnvelope = {
    data: medical_recordCreateManyDoctorInput | medical_recordCreateManyDoctorInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>;
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutDoctorInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    user_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type userUpsertWithoutDoctorInput = {
    update: XOR<userUpdateWithoutDoctorInput, userUncheckedUpdateWithoutDoctorInput>;
    create: XOR<userCreateWithoutDoctorInput, userUncheckedCreateWithoutDoctorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDoctorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutDoctorInput, userUncheckedUpdateWithoutDoctorInput>;
  };

  export type userUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutDoctorInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<medical_recordUpdateWithoutDoctorInput, medical_recordUncheckedUpdateWithoutDoctorInput>;
    create: XOR<medical_recordCreateWithoutDoctorInput, medical_recordUncheckedCreateWithoutDoctorInput>;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutDoctorInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<medical_recordUpdateWithoutDoctorInput, medical_recordUncheckedUpdateWithoutDoctorInput>;
  };

  export type medical_recordUpdateManyWithWhereWithoutDoctorInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyWithoutDoctorInput>;
  };

  export type medical_recordScalarWhereInput = {
    AND?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
    OR?: medical_recordScalarWhereInput[];
    NOT?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
    id?: UuidFilter<'medical_record'> | string;
    patient_id?: UuidFilter<'medical_record'> | string;
    doctor_id?: UuidFilter<'medical_record'> | string;
    diagnosis?: StringFilter<'medical_record'> | string;
    prescription?: StringFilter<'medical_record'> | string;
    user_id?: UuidFilter<'medical_record'> | string;
    created_at?: DateTimeFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeFilter<'medical_record'> | Date | string;
  };

  export type doctorCreateWithoutMedical_recordInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
    user: userCreateNestedOneWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutMedical_recordInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorCreateOrConnectWithoutMedical_recordInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutMedical_recordInput, doctorUncheckedCreateWithoutMedical_recordInput>;
  };

  export type patientCreateWithoutMedical_recordInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutMedical_recordInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutMedical_recordInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutMedical_recordInput, patientUncheckedCreateWithoutMedical_recordInput>;
  };

  export type userCreateWithoutMedical_recordInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMedical_recordInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMedical_recordInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
  };

  export type doctorUpsertWithoutMedical_recordInput = {
    update: XOR<doctorUpdateWithoutMedical_recordInput, doctorUncheckedUpdateWithoutMedical_recordInput>;
    create: XOR<doctorCreateWithoutMedical_recordInput, doctorUncheckedCreateWithoutMedical_recordInput>;
    where?: doctorWhereInput;
  };

  export type doctorUpdateToOneWithWhereWithoutMedical_recordInput = {
    where?: doctorWhereInput;
    data: XOR<doctorUpdateWithoutMedical_recordInput, doctorUncheckedUpdateWithoutMedical_recordInput>;
  };

  export type doctorUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
    user?: userUpdateOneRequiredWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type patientUpsertWithoutMedical_recordInput = {
    update: XOR<patientUpdateWithoutMedical_recordInput, patientUncheckedUpdateWithoutMedical_recordInput>;
    create: XOR<patientCreateWithoutMedical_recordInput, patientUncheckedCreateWithoutMedical_recordInput>;
    where?: patientWhereInput;
  };

  export type patientUpdateToOneWithWhereWithoutMedical_recordInput = {
    where?: patientWhereInput;
    data: XOR<patientUpdateWithoutMedical_recordInput, patientUncheckedUpdateWithoutMedical_recordInput>;
  };

  export type patientUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type userUpsertWithoutMedical_recordInput = {
    update: XOR<userUpdateWithoutMedical_recordInput, userUncheckedUpdateWithoutMedical_recordInput>;
    create: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMedical_recordInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMedical_recordInput, userUncheckedUpdateWithoutMedical_recordInput>;
  };

  export type userUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutPatientInput = {
    id?: string;
    appointment_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    user: userCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutPatientInput = {
    id?: string;
    appointment_date: Date | string;
    doctor_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentCreateManyPatientInputEnvelope = {
    data: appointmentCreateManyPatientInput | appointmentCreateManyPatientInput[];
    skipDuplicates?: boolean;
  };

  export type medical_recordCreateWithoutPatientInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutMedical_recordInput;
    user: userCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateWithoutPatientInput = {
    id?: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutPatientInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<medical_recordCreateWithoutPatientInput, medical_recordUncheckedCreateWithoutPatientInput>;
  };

  export type medical_recordCreateManyPatientInputEnvelope = {
    data: medical_recordCreateManyPatientInput | medical_recordCreateManyPatientInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutPatientInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutUserInput;
    doctor?: doctorCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPatientInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutUserInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPatientInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>;
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutPatientInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutPatientInput>;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutPatientInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<medical_recordUpdateWithoutPatientInput, medical_recordUncheckedUpdateWithoutPatientInput>;
    create: XOR<medical_recordCreateWithoutPatientInput, medical_recordUncheckedCreateWithoutPatientInput>;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutPatientInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<medical_recordUpdateWithoutPatientInput, medical_recordUncheckedUpdateWithoutPatientInput>;
  };

  export type medical_recordUpdateManyWithWhereWithoutPatientInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyWithoutPatientInput>;
  };

  export type userUpsertWithoutPatientInput = {
    update: XOR<userUpdateWithoutPatientInput, userUncheckedUpdateWithoutPatientInput>;
    create: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPatientInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPatientInput, userUncheckedUpdateWithoutPatientInput>;
  };

  export type userUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutUserNestedInput;
    doctor?: doctorUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutUserNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutUserInput = {
    id?: string;
    appointment_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    patient: patientCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutUserInput = {
    id?: string;
    appointment_date: Date | string;
    patient_id: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutUserInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>;
  };

  export type appointmentCreateManyUserInputEnvelope = {
    data: appointmentCreateManyUserInput | appointmentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type doctorCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
    medical_record?: medical_recordCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorCreateOrConnectWithoutUserInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>;
  };

  export type doctorCreateManyUserInputEnvelope = {
    data: doctorCreateManyUserInput | doctorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type medical_recordCreateWithoutUserInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutMedical_recordInput;
    patient: patientCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateWithoutUserInput = {
    id?: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutUserInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>;
  };

  export type medical_recordCreateManyUserInputEnvelope = {
    data: medical_recordCreateManyUserInput | medical_recordCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type patientCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    medical_record?: medical_recordCreateNestedManyWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutUserInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>;
  };

  export type patientCreateManyUserInputEnvelope = {
    data: patientCreateManyUserInput | patientCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutUserInput, appointmentUncheckedUpdateWithoutUserInput>;
    create: XOR<appointmentCreateWithoutUserInput, appointmentUncheckedCreateWithoutUserInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutUserInput, appointmentUncheckedUpdateWithoutUserInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutUserInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutUserInput>;
  };

  export type doctorUpsertWithWhereUniqueWithoutUserInput = {
    where: doctorWhereUniqueInput;
    update: XOR<doctorUpdateWithoutUserInput, doctorUncheckedUpdateWithoutUserInput>;
    create: XOR<doctorCreateWithoutUserInput, doctorUncheckedCreateWithoutUserInput>;
  };

  export type doctorUpdateWithWhereUniqueWithoutUserInput = {
    where: doctorWhereUniqueInput;
    data: XOR<doctorUpdateWithoutUserInput, doctorUncheckedUpdateWithoutUserInput>;
  };

  export type doctorUpdateManyWithWhereWithoutUserInput = {
    where: doctorScalarWhereInput;
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutUserInput>;
  };

  export type doctorScalarWhereInput = {
    AND?: doctorScalarWhereInput | doctorScalarWhereInput[];
    OR?: doctorScalarWhereInput[];
    NOT?: doctorScalarWhereInput | doctorScalarWhereInput[];
    id?: UuidFilter<'doctor'> | string;
    first_name?: StringFilter<'doctor'> | string;
    last_name?: StringFilter<'doctor'> | string;
    specialization?: StringFilter<'doctor'> | string;
    contact_number?: StringFilter<'doctor'> | string;
    user_id?: UuidFilter<'doctor'> | string;
    created_at?: DateTimeFilter<'doctor'> | Date | string;
    updated_at?: DateTimeFilter<'doctor'> | Date | string;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutUserInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<medical_recordUpdateWithoutUserInput, medical_recordUncheckedUpdateWithoutUserInput>;
    create: XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutUserInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<medical_recordUpdateWithoutUserInput, medical_recordUncheckedUpdateWithoutUserInput>;
  };

  export type medical_recordUpdateManyWithWhereWithoutUserInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyWithoutUserInput>;
  };

  export type patientUpsertWithWhereUniqueWithoutUserInput = {
    where: patientWhereUniqueInput;
    update: XOR<patientUpdateWithoutUserInput, patientUncheckedUpdateWithoutUserInput>;
    create: XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>;
  };

  export type patientUpdateWithWhereUniqueWithoutUserInput = {
    where: patientWhereUniqueInput;
    data: XOR<patientUpdateWithoutUserInput, patientUncheckedUpdateWithoutUserInput>;
  };

  export type patientUpdateManyWithWhereWithoutUserInput = {
    where: patientScalarWhereInput;
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyWithoutUserInput>;
  };

  export type patientScalarWhereInput = {
    AND?: patientScalarWhereInput | patientScalarWhereInput[];
    OR?: patientScalarWhereInput[];
    NOT?: patientScalarWhereInput | patientScalarWhereInput[];
    id?: UuidFilter<'patient'> | string;
    first_name?: StringFilter<'patient'> | string;
    last_name?: StringFilter<'patient'> | string;
    dob?: DateTimeFilter<'patient'> | Date | string;
    gender?: StringFilter<'patient'> | string;
    contact_number?: StringFilter<'patient'> | string;
    address?: StringFilter<'patient'> | string;
    user_id?: UuidFilter<'patient'> | string;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
  };

  export type appointmentCreateManyDoctorInput = {
    id?: string;
    appointment_date: Date | string;
    patient_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyDoctorInput = {
    id?: string;
    patient_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
    user?: userUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUpdateOneRequiredWithoutMedical_recordNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyPatientInput = {
    id?: string;
    appointment_date: Date | string;
    doctor_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyPatientInput = {
    id?: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    user?: userUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutMedical_recordNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyUserInput = {
    id?: string;
    appointment_date: Date | string;
    patient_id: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorCreateManyUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyUserInput = {
    id?: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    prescription: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateManyUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    dob: Date | string;
    gender: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type doctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
    medical_record?: medical_recordUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutMedical_recordNestedInput;
    patient?: patientUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    medical_record?: medical_recordUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    dob?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
   */
  export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DoctorCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PatientCountOutputTypeDefaultArgs instead
   */
  export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PatientCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use doctorDefaultArgs instead
   */
  export type doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    doctorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use hospitalDefaultArgs instead
   */
  export type hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    hospitalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use medical_recordDefaultArgs instead
   */
  export type medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    medical_recordDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use patientDefaultArgs instead
   */
  export type patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    patientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
