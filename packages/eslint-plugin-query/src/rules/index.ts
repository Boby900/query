import * as exhaustiveDeps from './exhaustive-deps/exhaustive-deps.rule'
import * as noDeprecatedOptions from './no-deprecated-options/no-deprecated-options.rule'
import * as preferObjectSyntax from './prefer-query-object-syntax/prefer-query-object-syntax'
import * as stableQueryClient from './stable-query-client/stable-query-client.rule'

export const rules = {
  [exhaustiveDeps.name]: exhaustiveDeps.rule,
  [noDeprecatedOptions.name]: noDeprecatedOptions.rule,
  [preferObjectSyntax.name]: preferObjectSyntax.rule,
  [stableQueryClient.name]: stableQueryClient.rule,
}
