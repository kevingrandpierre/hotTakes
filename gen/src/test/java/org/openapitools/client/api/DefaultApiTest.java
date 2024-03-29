/*
 * API d'authentification
 * Une API d'authentification sécurisée pour les utilisateurs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import java.io.File;
import org.openapitools.client.model.InlineObject;
import org.openapitools.client.model.InlineObject1;
import org.openapitools.client.model.InlineResponse200;
import org.openapitools.client.model.InlineResponse2001;
import org.openapitools.client.model.InlineResponse2002;
import org.openapitools.client.model.InlineResponse2003;
import org.openapitools.client.model.InlineResponse201;
import org.openapitools.client.model.InlineResponse2011;
import org.openapitools.client.model.InlineResponse400;
import org.openapitools.client.model.InlineResponse4001;
import org.openapitools.client.model.InlineResponse401;
import org.openapitools.client.model.InlineResponse4011;
import org.openapitools.client.model.InlineResponse4012;
import org.openapitools.client.model.InlineResponse404;
import org.openapitools.client.model.InlineResponse500;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for DefaultApi
 */
@Ignore
public class DefaultApiTest {

    private final DefaultApi api = new DefaultApi();

    
    /**
     * Connexion d&#39;un utilisateur existant
     *
     * Vérifie les informations de connexion d&#39;un utilisateur et renvoie un jeton d&#39;authentification JWT s&#39;il est valide
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void loginPostTest() throws ApiException {
        InlineObject1 inlineObject1 = null;
        InlineResponse200 response = api.loginPost(inlineObject1);

        // TODO: test validations
    }
    
    /**
     * Récupération d&#39;une sauce
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void sauceGetTest() throws ApiException {
        String id = null;
        InlineResponse2001 response = api.sauceGet(id);

        // TODO: test validations
    }
    
    /**
     * Suppression d&#39;une sauce
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void sauceIdDeleteTest() throws ApiException {
        String id = null;
        InlineResponse2003 response = api.sauceIdDelete(id);

        // TODO: test validations
    }
    
    /**
     * like/dislike d&#39;une sauce
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void sauceIdLikePostTest() throws ApiException {
        String id = null;
        Integer like = null;
        api.sauceIdLikePost(id, like);

        // TODO: test validations
    }
    
    /**
     * Modification d&#39;une sauce
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void sauceIdPutTest() throws ApiException {
        String id = null;
        String sauce = null;
        File image = null;
        InlineResponse2002 response = api.sauceIdPut(id, sauce, image);

        // TODO: test validations
    }
    
    /**
     * Création d&#39;une sauce
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void saucePostTest() throws ApiException {
        String sauce = null;
        File image = null;
        InlineResponse2011 response = api.saucePost(sauce, image);

        // TODO: test validations
    }
    
    /**
     * Récupération de toutes les sauces dans la base de données
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void saucesGetTest() throws ApiException {
        String find = null;
        Object sauces = null;
        Object error = null;
        String status = null;
        api.saucesGet(find, sauces, error, status);

        // TODO: test validations
    }
    
    /**
     * Inscription d&#39;un nouvel utilisateur
     *
     * Crée un nouvel utilisateur avec un e-mail et un mot de passe et le sauvegarde dans la base de données
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void signupPostTest() throws ApiException {
        InlineObject inlineObject = null;
        InlineResponse201 response = api.signupPost(inlineObject);

        // TODO: test validations
    }
    
}
