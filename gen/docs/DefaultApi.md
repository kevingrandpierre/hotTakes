# DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](DefaultApi.md#loginPost) | **POST** /login | Connexion d&#39;un utilisateur existant
[**sauceGet**](DefaultApi.md#sauceGet) | **GET** /sauce | Récupération d&#39;une sauce
[**sauceIdDelete**](DefaultApi.md#sauceIdDelete) | **DELETE** /sauce/{id} | Suppression d&#39;une sauce
[**sauceIdLikePost**](DefaultApi.md#sauceIdLikePost) | **POST** /sauce/{id}/like | like/dislike d&#39;une sauce
[**sauceIdPut**](DefaultApi.md#sauceIdPut) | **PUT** /sauce/{id} | Modification d&#39;une sauce
[**saucePost**](DefaultApi.md#saucePost) | **POST** /sauce | Création d&#39;une sauce
[**saucesGet**](DefaultApi.md#saucesGet) | **GET** /sauces | Récupération de toutes les sauces dans la base de données
[**signupPost**](DefaultApi.md#signupPost) | **POST** /signup | Inscription d&#39;un nouvel utilisateur


<a name="loginPost"></a>
# **loginPost**
> InlineResponse200 loginPost(inlineObject1)

Connexion d&#39;un utilisateur existant

Vérifie les informations de connexion d&#39;un utilisateur et renvoie un jeton d&#39;authentification JWT s&#39;il est valide

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    InlineObject1 inlineObject1 = new InlineObject1(); // InlineObject1 | 
    try {
      InlineResponse200 result = apiInstance.loginPost(inlineObject1);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#loginPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  |

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connexion réussie |  -  |
**401** | Non autorisé |  -  |
**500** | Erreur serveur interne |  -  |

<a name="sauceGet"></a>
# **sauceGet**
> InlineResponse2001 sauceGet(id)

Récupération d&#39;une sauce

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "605c44f99d65f923d8a2a0f3"; // String | ID de la sauce à récupérer.
    try {
      InlineResponse2001 result = apiInstance.sauceGet(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#sauceGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID de la sauce à récupérer. |

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Renvoi la sauce demandée. |  -  |
**404** | La sauce demandée n&#39;a pas été trouvée. |  -  |

<a name="sauceIdDelete"></a>
# **sauceIdDelete**
> InlineResponse2003 sauceIdDelete(id)

Suppression d&#39;une sauce

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "605c44f99d65f923d8a2a0f3"; // String | ID de la sauce à supprimer.
    try {
      InlineResponse2003 result = apiInstance.sauceIdDelete(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#sauceIdDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID de la sauce à supprimer. |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sauce supprimée avec succès. |  -  |
**401** | L&#39;utilisateur n&#39;est pas autorisé à supprimer cette sauce. |  -  |
**500** | Erreur du serveur. Impossible de supprimer la sauce. |  -  |

<a name="sauceIdLikePost"></a>
# **sauceIdLikePost**
> InlineResponse2012 sauceIdLikePost(id, like)

like/dislike d&#39;une sauce

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | L'id de la sauce
    Integer like = 56; // Integer | like ou dislike (1 ou -1)
    try {
      InlineResponse2012 result = apiInstance.sauceIdLikePost(id, like);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#sauceIdLikePost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| L&#39;id de la sauce |
 **like** | **Integer**| like ou dislike (1 ou -1) |

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | La sauce a été notée |  -  |
**400** | Une erreur s&#39;est produite lors de la notation de la sauce |  -  |
**403** | La requête est invalide |  -  |

<a name="sauceIdPut"></a>
# **sauceIdPut**
> InlineResponse2002 sauceIdPut(id, inlineObject3)

Modification d&#39;une sauce

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "605c44f99d65f923d8a2a0f3"; // String | ID de la sauce à modifier.
    InlineObject3 inlineObject3 = new InlineObject3(); // InlineObject3 | 
    try {
      InlineResponse2002 result = apiInstance.sauceIdPut(id, inlineObject3);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#sauceIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID de la sauce à modifier. |
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sauce modifiée avec succès. |  -  |
**400** | Mauvaise requête. Vérifiez les données envoyées. |  -  |
**401** | L&#39;utilisateur n&#39;est pas autorisé à modifier cette sauce. |  -  |

<a name="saucePost"></a>
# **saucePost**
> InlineResponse2011 saucePost(inlineObject2)

Création d&#39;une sauce

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    InlineObject2 inlineObject2 = new InlineObject2(); // InlineObject2 | 
    try {
      InlineResponse2011 result = apiInstance.saucePost(inlineObject2);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#saucePost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  |

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Objet enregistré ! |  -  |
**400** | Mauvaise requête. Vérifiez les données envoyées. |  -  |

<a name="saucesGet"></a>
# **saucesGet**
> List&lt;InlineResponse2001&gt; saucesGet()

Récupération de toutes les sauces dans la base de données

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<InlineResponse2001> result = apiInstance.saucesGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#saucesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;InlineResponse2001&gt;**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Renvoi un tableau contenant toutes les sauces. |  -  |
**404** | Aucune sauce n&#39;a été trouvée. |  -  |

<a name="signupPost"></a>
# **signupPost**
> InlineResponse201 signupPost(inlineObject)

Inscription d&#39;un nouvel utilisateur

Crée un nouvel utilisateur avec un e-mail et un mot de passe et le sauvegarde dans la base de données

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    InlineObject inlineObject = new InlineObject(); // InlineObject | 
    try {
      InlineResponse201 result = apiInstance.signupPost(inlineObject);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#signupPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Utilisateur créé avec succès |  -  |
**400** | Requête invalide |  -  |

